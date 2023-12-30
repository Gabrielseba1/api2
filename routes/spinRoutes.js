const express = require('express');
const router = express.Router();
const db = require('../config/database');
const fs = require('fs');
const readline = require('readline');

let isPaidSpin = false;
let spinCount = 0;
let spinsToStartPaying = 30;
let paidSpinInterval = 15;
let paidSpinCounter = 0;
let storedPattern = null;

const path = require('path');

async function readSpinsFromFile(fileName) {
    const filePath = path.join(__dirname, '..', 'spins', fileName);
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const spins = [];
    for await (const line of rl) {
        if (line.trim()) {
            const spin = JSON.parse(line);
            spins.push(spin);
        }
    }
    return spins;
}

async function getSpins() {
    let liveFortuneSpins = [];
    let dieFortuneSpins = await readSpinsFromFile('DIE_FORTUNE.txt');
    if (spinCount >= spinsToStartPaying) {
        liveFortuneSpins = await readSpinsFromFile('LIVE_FORTUNE.txt');
    }
    return { liveFortuneSpins, dieFortuneSpins };
}

function selectRandomSpin(spins) {
    if (!Array.isArray(spins) || spins.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * spins.length);
    return spins[randomIndex];
}

function normalizeSpinData(spin) {
    if (!spin.dt || !spin.dt.si) return spin;

    if (spin.dt.si.wp && typeof spin.dt.si.wp === 'object') {

    } else {

        spin.dt.si.wp = null;
    }

    spin.dt.si.orl = Array.isArray(spin.dt.si.orl) ? spin.dt.si.orl : null;

    if (spin.dt.si.lw && typeof spin.dt.si.lw === 'object') {

    } else {

        spin.dt.si.lw = null;
    }

    if (spin.dt.si.rwsp && typeof spin.dt.si.rwsp === 'object') {

    } else {
        spin.dt.si.rwsp = null;
    }

    return spin;
}

async function getSpinValuesFromDatabase() {
    const userId = 1;
    return new Promise((resolve, reject) => {
        db.query('SELECT SPINCOUNT, SPINSTOSTARTPAYING, PAIDSPININTERVAL, PAIDSPINCOUNTER FROM TB_MANIPULACAO WHERE id = ?', [userId], (err, results) => {
            if (err) {
                console.error('Erro ao recuperar os valores da TB_MANIPULACAO do banco de dados:', err);
                reject(err);
            } else {
                if (!results || results.length === 0) {
                    console.error('Dados da TB_MANIPULACAO não encontrados.');
                    reject(new Error('Data not found'));
                } else {
                    const { SPINCOUNT, SPINSTOSTARTPAYING, PAIDSPININTERVAL, PAIDSPINCOUNTER } = results[0];
                    spinCount = SPINCOUNT;
                    spinsToStartPaying = SPINSTOSTARTPAYING;
                    paidSpinInterval = PAIDSPININTERVAL;
                    paidSpinCounter = PAIDSPINCOUNTER;
                    resolve();
                }
            }
        });
    });
}

router.post('/Spin/Get', async (req, res) => {
    console.log('Dados da query recebida:', req.query);
    console.log('Cabeçalhos da requisição:', req.headers);
    console.log('Corpo da requisição:', req.body);

    let spin;

    const betAmount = parseFloat(req.body.btt);
    const cs = parseFloat(req.body.cs);
    const ml = parseFloat(req.body.ml);

    if (isNaN(betAmount) || betAmount <= 0 || isNaN(cs) || cs <= 0 || isNaN(ml) || ml <= 0) {
        res.status(400).send('Valores de aposta, coeficiente ou multiplicador são inválidos.');
        return;
    }

    const userId = 1;

    try {
        await getSpinValuesFromDatabase();
    } catch (error) {
        console.error('Erro ao obter os valores da TB_MANIPULACAO:', error);
        res.status(500).send('Internal Server Error');
        return;
    }

    db.query('SELECT VALOR FROM TB_SALDO_GLOBAL WHERE id = ?', [userId], async (err, results) => {
        if (err) {
            console.error('Erro ao recuperar o saldo do banco de dados:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (!results || results.length === 0) {
            console.error('Usuário não encontrado ou saldo não disponível.');
            res.status(404).send('User not found or balance unavailable');
            return;
        }

        let balance = parseFloat(results[0].VALOR);
        if (isNaN(balance)) {
            console.error('O saldo recuperado do banco de dados não é um número.');
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Saldo antes da atualização:', balance);
        let previousBalance = balance;

        try {
            const spinsData = await getSpins();  // Adicionado
            spin = selectRandomSpin(spinsData.liveFortuneSpins);
        } catch (error) {
            console.error('Erro ao obter os valores da TB_MANIPULACAO:', error);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Removido: let spin;
        const spinsData = await getSpins();
        if (isPaidSpin) {
            spin = selectRandomSpin(spinsData.liveFortuneSpins);
        } else {
            spin = selectRandomSpin(spinsData.dieFortuneSpins);
        }
        spin = normalizeSpinData(spin);
        let totalWinnings = 0;
        if (isPaidSpin && spin.dt.si.itw) {
            totalWinnings = Object.values(spin.dt.si.lw || {}).reduce((acc, val) => acc + val, 0);
            balance += totalWinnings;
            spin.dt.si.tw = spin.dt.si.aw = spin.dt.si.ctw = totalWinnings;
            spin.dt.si.np = totalWinnings - betAmount;
        } else {
            const calculatedBetAmount = betAmount * cs * ml * 5;
            balance -= calculatedBetAmount;
            spin.dt.si.tw = spin.dt.si.aw = spin.dt.si.ctw = 0;
            spin.dt.si.np = -calculatedBetAmount;
        }

        db.query('UPDATE TB_SALDO_GLOBAL SET VALOR = ? WHERE id = ?', [balance, userId], (updateErr, updateResults) => {
            if (updateErr) {
                console.error(updateErr);
                res.status(500).send('Internal Server Error');
                return;
            }
            console.log('Saldo atualizado no banco de dados:', balance);

            spin.dt.si.blb = previousBalance;
            spin.dt.si.blab = balance;
            spin.dt.si.bl = balance;
            spin.dt.si.tb = betAmount;
            spin.dt.si.tbb = betAmount;
            spin.dt.si.cs = cs;
            spin.dt.si.ml = ml;

            console.log('Enviando resposta...');
            res.json(spin);
        });
    });
});

module.exports = router;
