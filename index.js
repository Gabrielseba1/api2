const express = require('express');
const http = require('http');
const gameInfoRoutes = require('./routes/gameInfoRoutes');
const gameWalletRoutes = require('./routes/gameWalletRoutes');
const betSummaryRoutes = require('./routes/betSummaryRoutes');
const verifyoperatorRoutes = require('./routes/verifyoperatorRoutes');
const verifySessionRoutes = require('./routes/verifySessionRoutes');
const betHistoryRoutes = require('./routes/betHistoryRoutes');
const spinRoutes = require('./routes/spinRoutes');
const loggerMiddleware = require('./middlewares/logger');
const errorHandlerMiddleware = require('./middlewares/errorHandlers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(loggerMiddleware);


app.use('/game-api/fortune-tiger/v2', gameInfoRoutes);
app.use('/web-api/game-proxy/v2', gameWalletRoutes);
app.use('/web-api/game-proxy/v2', betSummaryRoutes);
app.use('/game-api/fortune-tiger/v2', spinRoutes);
app.use('/web-api/auth/session/v2', verifyoperatorRoutes);
app.use('/web-api/game-proxy/v2', betHistoryRoutes);
app.use('/web-api/auth/session/v2', verifySessionRoutes);

app.use(errorHandlerMiddleware);


const port = 3000;
http.createServer(app).listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});