
const express = require('express');
const router = express.Router();

// Aqui você definiria as rotas específicas para 'spin'
router.post('/BetSummary/Get', (req, res) => {  
    res.json({ "dt": { "lut": 0, "bs": null }, "err": null });
    
});

// Exporta o router para ser usado em outro arquivo
module.exports = router;
