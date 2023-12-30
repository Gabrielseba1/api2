const express = require('express');
const router = express.Router();

router.post('/BetHistory/Get', (req, res) => {
    // Objeto JSON que você deseja enviar como resposta
    const response = {

    "dt": {
      "bh": [
        {
          "tid": "1722686689039745024",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": 600,
          "bt": 1699555487311,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686689039745024",
              "tba": 500,
              "twla": 600,
              "bl": 208097.89,
              "bt": 1699555487283,
              "gd": {
                "wc": 41,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": {
                  "1": [
                    1,
                    4,
                    7
                  ],
                  "4": [
                    0,
                    4,
                    8
                  ]
                },
                "orl": [
                  5,
                  0,
                  3,
                  4,
                  0,
                  7,
                  7,
                  7,
                  0
                ],
                "lw": {
                  "1": 300,
                  "4": 800
                },
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 1100,
                "pmt": null,
                "cwc": 1,
                "fstc": null,
                "pcwc": 1,
                "rwsp": {
                  "1": 3,
                  "4": 8
                },
                "hashr": "0:5;4;7#0;0;7#3;7;0#R#7#011121#MV#500#MT#1#R#5#001122#MV#500#MT#1#MG#1100#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  5,
                  0,
                  3,
                  4,
                  0,
                  7,
                  7,
                  7,
                  0
                ],
                "sid": "1722686689039745024",
                "psid": "1722686689039745024",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 1100,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 207497.89,
                "blab": 206997.89,
                "bl": 208097.89,
                "tb": 500,
                "tbb": 500,
                "tw": 1100,
                "np": 600,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686672564518913",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": -500,
          "bt": 1699555483385,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686672564518913",
              "tba": 500,
              "twla": -500,
              "bl": 207497.89,
              "bt": 1699555483353,
              "gd": {
                "wc": 38,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": null,
                "orl": [
                  7,
                  6,
                  5,
                  5,
                  3,
                  6,
                  2,
                  6,
                  5
                ],
                "lw": null,
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 0,
                "pmt": null,
                "cwc": 0,
                "fstc": null,
                "pcwc": 0,
                "rwsp": null,
                "hashr": "0:7;5;2#6;3;6#5;6;5#MV#500#MT#1#MG#0#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  7,
                  6,
                  5,
                  5,
                  3,
                  6,
                  2,
                  6,
                  5
                ],
                "sid": "1722686672564518913",
                "psid": "1722686672564518913",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 0,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 207997.89,
                "blab": 207497.89,
                "bl": 207497.89,
                "tb": 500,
                "tbb": 500,
                "tw": 0,
                "np": -500,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686587717943296",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": 2000,
          "bt": 1699555463155,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686587717943296",
              "tba": 500,
              "twla": 2000,
              "bl": 207997.89,
              "bt": 1699555463123,
              "gd": {
                "wc": 38,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": {
                  "4": [
                    0,
                    4,
                    8
                  ]
                },
                "orl": [
                  3,
                  6,
                  6,
                  4,
                  3,
                  5,
                  6,
                  7,
                  3
                ],
                "lw": {
                  "4": 2500
                },
                "irs": false,
                "gwt": 1,
                "fb": null,
                "ctw": 2500,
                "pmt": null,
                "cwc": 1,
                "fstc": null,
                "pcwc": 1,
                "rwsp": {
                  "4": 25
                },
                "hashr": "0:3;4;6#6;3;7#6;5;3#R#3#001122#MV#500#MT#1#MG#2500#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  3,
                  6,
                  6,
                  4,
                  3,
                  5,
                  6,
                  7,
                  3
                ],
                "sid": "1722686587717943296",
                "psid": "1722686587717943296",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 2500,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 205997.89,
                "blab": 205497.89,
                "bl": 207997.89,
                "tb": 500,
                "tbb": 500,
                "tw": 2500,
                "np": 2000,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686577701945345",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": -500,
          "bt": 1699555460768,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686577701945345",
              "tba": 500,
              "twla": -500,
              "bl": 205997.89,
              "bt": 1699555460736,
              "gd": {
                "wc": 38,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": null,
                "orl": [
                  2,
                  5,
                  6,
                  3,
                  5,
                  2,
                  2,
                  7,
                  4
                ],
                "lw": null,
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 0,
                "pmt": null,
                "cwc": 0,
                "fstc": null,
                "pcwc": 0,
                "rwsp": null,
                "hashr": "0:2;3;2#5;5;7#6;2;4#MV#500#MT#1#MG#0#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  2,
                  5,
                  6,
                  3,
                  5,
                  2,
                  2,
                  7,
                  4
                ],
                "sid": "1722686577701945345",
                "psid": "1722686577701945345",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 0,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 206497.89,
                "blab": 205997.89,
                "bl": 205997.89,
                "tb": 500,
                "tbb": 500,
                "tw": 0,
                "np": -500,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686565324554240",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": -500,
          "bt": 1699555457820,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686565324554240",
              "tba": 500,
              "twla": -500,
              "bl": 206497.89,
              "bt": 1699555457784,
              "gd": {
                "wc": 38,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": null,
                "orl": [
                  3,
                  7,
                  4,
                  2,
                  5,
                  6,
                  4,
                  5,
                  2
                ],
                "lw": null,
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 0,
                "pmt": null,
                "cwc": 0,
                "fstc": null,
                "pcwc": 0,
                "rwsp": null,
                "hashr": "0:3;2;4#7;5;5#4;6;2#MV#500#MT#1#MG#0#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  3,
                  7,
                  4,
                  2,
                  5,
                  6,
                  4,
                  5,
                  2
                ],
                "sid": "1722686565324554240",
                "psid": "1722686565324554240",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 0,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 206997.89,
                "blab": 206497.89,
                "bl": 206497.89,
                "tb": 500,
                "tbb": 500,
                "tw": 0,
                "np": -500,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686549189066752",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": -500,
          "bt": 1699555453969,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686549189066752",
              "tba": 500,
              "twla": -500,
              "bl": 206997.89,
              "bt": 1699555453939,
              "gd": {
                "wc": 38,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": null,
                "orl": [
                  5,
                  0,
                  3,
                  0,
                  3,
                  5,
                  6,
                  4,
                  5
                ],
                "lw": null,
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 0,
                "pmt": null,
                "cwc": 0,
                "fstc": null,
                "pcwc": 0,
                "rwsp": null,
                "hashr": "0:5;0;6#0;3;4#3;5;5#MV#500#MT#1#MG#0#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  5,
                  0,
                  3,
                  0,
                  3,
                  5,
                  6,
                  4,
                  5
                ],
                "sid": "1722686549189066752",
                "psid": "1722686549189066752",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 0,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 207497.89,
                "blab": 206997.89,
                "bl": 206997.89,
                "tb": 500,
                "tbb": 500,
                "tw": 0,
                "np": -500,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        },
        {
          "tid": "1722686522433601538",
          "gid": 126,
          "cc": "BRL",
          "gtba": 500,
          "gtwla": -500,
          "bt": 1699555447704,
          "ge": [
            1,
            11
          ],
          "bd": [
            {
              "tid": "1722686522433601538",
              "tba": 500,
              "twla": -500,
              "bl": 207497.89,
              "bt": 1699555447558,
              "gd": {
                "wc": 36,
                "ist": false,
                "itw": true,
                "fws": 0,
                "wp": null,
                "orl": [
                  7,
                  2,
                  5,
                  5,
                  5,
                  6,
                  7,
                  4,
                  5
                ],
                "lw": null,
                "irs": false,
                "gwt": -1,
                "fb": null,
                "ctw": 0,
                "pmt": null,
                "cwc": 0,
                "fstc": null,
                "pcwc": 0,
                "rwsp": null,
                "hashr": "0:7;5;7#2;5;4#5;6;5#MV#500#MT#1#MG#0#",
                "ml": 10,
                "cs": 10,
                "rl": [
                  7,
                  2,
                  5,
                  5,
                  5,
                  6,
                  7,
                  4,
                  5
                ],
                "sid": "1722686522433601538",
                "psid": "1722686522433601538",
                "st": 1,
                "nst": 1,
                "pf": 1,
                "aw": 0,
                "wid": 0,
                "wt": "C",
                "wk": "0_C",
                "wbn": null,
                "wfg": null,
                "blb": 207997.89,
                "blab": 207497.89,
                "bl": 207497.89,
                "tb": 500,
                "tbb": 500,
                "tw": 0,
                "np": -500,
                "ocr": null,
                "mr": null,
                "ge": [
                  1,
                  11
                ]
              }
            }
          ],
          "mgcc": 0,
          "fscc": 0
        }
      ]
    },
    "err": null
};
    res.json(response);
});
// Exporta o router para ser usado em outro arquivo
module.exports = router;