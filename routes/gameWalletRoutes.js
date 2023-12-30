const express = require('express');
const router = express.Router();
const db = require('../config/database');
// Aqui você definiria as rotas específicas para 'spin'
router.post('/GameWallet/Get', (req, res) => {

  db.query('SELECT VALOR FROM TB_SALDO_GLOBAL', (err, results) => {
    if (err) {
      // Tratar o erro conforme necessário
      console.error(err);
      return res.status(500).send('Erro ao acessar o banco de dados');
    }
    
    if (results.length > 0) {
      const balance = results[0].VALOR;

      const walletData = {
        "dt": {
          "cc": "BRL",
          "tb": balance,
          "pb": 0.00,
          "cb": balance,
          "tbb": 0.00,
          "tfgb": 0.00,
          "rfgc": 0,
          "inbe": false,
          "infge": false,
          "iebe": false,
          "iefge": false,
          "ch": {
            "k": "0_C",
            "cid": 0,
            "cb": balance
          },
          "p": null,
          "ocr": null
        },
        "err": null
      };

      res.json(walletData);
      
    } else {
      // Caso nenhum resultado seja encontrado
      res.status(404).send('Saldo não encontrado');
    }
  });
});
// Exporta o router para ser usado em outro arquivo
module.exports = router;