const express = require('express');
const router = express.Router();
const db = require('../config/database');


router.post('/GameInfo/Get', (req, res) => {
  const traceId = req.query.traceId;
  

  db.query('SELECT VALOR FROM TB_SALDO_GLOBAL LIMIT 1', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const balance = results[0]?.VALOR;

  
    const data = {
      dt: {
        fb: null,
        wt: {
          mw: 5.0,
          bw: 20.0,
          mgw: 35.0,
          smgw: 50.0,
        },
        maxwm: null,
        cs: [0.08, 0.4, 5, 10],
        ml: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        mxl: 5,
        bl: balance,
        inwe: false,
        iuwe: false,
        ls: {
          si: {
            wc: 41,
            ist: false,
            itw: true,
            fws: 0,
            wp: null,
            orl: [6, 3, 5, 5, 2, 6, 7, 7, 7],
            lw: null,
            irs: false,
            gwt: -1,
            fb: null,
            ctw: 0.0,
            pmt: null,
            cwc: 0,
            fstc: null,
            pcwc: 0,
            rwsp: null,
            hashr: null,
            ml: 1,
            cs: 0.08,
            rl: [6, 3, 5, 5, 2, 6, 7, 7, 7],
            sid: '300000580624628',
            psid: '300000580624628',
            st: 1,
            nst: 1,
            pf: 1,
            aw: 0.00,
            wid: 0,
            wt: 'C',
            wk: '0_C',
            wbn: null,
            wfg: null,
            blb: 0.62,
            blab: balance,
            bl: balance,
            tb: 0.40,
            tbb: 0.40,
            tw: 0.00,
            np: -0.40,
            ocr: null,
            mr: null,
            ge: [1, 11],
          },
        },
      },
      cc: 'BRL',
      err: null
    };

    res.json(data);
  });
});

module.exports = router;