const logger = (req, res, next) => {
  const start = new Date();
  res.on('finish', () => { // Log quando a resposta é enviada de volta ao cliente
      const duration = new Date() - start;
      console.log(`${req.method} ${req.url}`, {
          query: req.query,
          params: req.params,
          body: req.body, // Cuidado com dados sensíveis
          responseTime: duration,
          status: res.statusCode
      });
  });
  next();
};
module.exports = logger;