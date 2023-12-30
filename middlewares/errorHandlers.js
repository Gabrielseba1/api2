// Pode ser necessário incluir uma biblioteca de logging ou definir NODE_ENV como 'development' ou 'production'
const isDevelopment = process.env.NODE_ENV === 'development';

const errorHandlers = (err, req, res, next) => {
  const errorDetails = isDevelopment ? err.stack : 'Something broke!'; // Mostra o stack trace completo apenas em desenvolvimento
  const statusCode = err.status || 500; // Usa o status do erro se houver, caso contrário usa 500

  console.error(err.stack);

  if (res.headersSent) { // Se a resposta já foi enviada, deve-se delegar para o default error handler do Express
    return next(err);
  }

  res.status(statusCode);

  // Você poderia adicionar uma verificação aqui para formatos de resposta diferentes, como JSON
  if (req.accepts('json')) {
    res.json({ error: errorDetails });
  } else {
    res.type('txt').send(errorDetails);
  }
};

module.exports = errorHandlers;
