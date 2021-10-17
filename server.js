var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'ecommerce' // // Replace with your database Name
}); 
 
connection.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

 
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Inicio' });
});

app.get('/users/registro/', function(req, res, next) {
   res.render('registro/registro.html', { title: 'Inicio' });
 });
 
app.post('/users', function(req, res, next) {
   console.log("hola")
   var query = connection.query(
      'INSERT INTO usuario(nombre_completo,contrasena,correo,telefono) VALUES(?,?,?,?)',
      [usuario.nombre_completo, usuario.contrasena, usuario.correo, usuario.telefono],
      function (error, result) {
         if (error) {
            throw error;
         } else {
            console.log(result);
         }
      }
   );
   connection.end();
});

app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;