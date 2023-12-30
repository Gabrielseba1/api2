
const express = require('express');
const router = express.Router();
const db = require('../config/database');
router.post('/verifyOperatorPlayerSession', (req, res) => {  
    const traceId = req.query.traceId;
    
    const responseData = {
        "dt": {
            "oj": {"jid": 1},
            "pid": "9smcaYfpDf",
            "pcd": "ff1test01",
            "tk": "28766c9fe05e65c3fa98945c2d3f19f2",
            "st": 1,
            "geu": "game-api/fortune-tiger/",
            "lau": "game-api/lobby/",
            "bau": "web-api/game-proxy/",
            "cc": "REAL",
            "cs": "R$",
            "nkn": "ff1test01",
            "gm": [
                {
                    "gid": 94,
                    "msdt": 1642145582000,
                    "medt": 1642145582000,
                    "st": 1,
                    "amsg": ""
                }
            ],
            "uiogc": {
                "bb": 1,
                "grtp": 0,
                "gec": 1,
                "cbu": 0,
                "cl": 0,
                "bf": 1,
                "mr": 0,
                "phtr": 0,
                "vc": 0,
                "bfbsi": 1,
                "bfbli": 9,
                "il": 0,
                "rp": 0,
                "gc": 0,
                "ign": 0,
                "tsn": 0,
                "we": 0,
                "gsc": 0,
                "bu": 0,
                "pwr": 0,
                "hd": 0,
                "et": 0,
                "np": 0,
                "igv": 0,
                "gr": 0,
                "iop": 1
            },
            "ec": [],
            "occ": {
                "rurl": "",
                "tcm": "",
                "tsc": 0,
                "ttp": 0,
                "tlb": "",
                "trb": ""
            },
            "ioph": "4905052c7333"
        },
        "err": null
    };

    res.json(responseData);
});

module.exports = router;
