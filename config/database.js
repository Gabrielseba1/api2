const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'admin',
  password: 'YjU1NDkxOD',
  database: 'test'
};

const db = mysql.createConnection(config);

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;
