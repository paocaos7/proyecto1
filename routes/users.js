var express = require('express');
var router = express.Router();

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
 
router.post('/', function(req, res, next) {
   
   var query = connection.query(
      'INSERT INTO usuario(nombre_completo,contrasena,correo,telefono) VALUES(?,?,?,?)',
      [req.body.campoNombre, req.body.campoContrasena, req.body.campoCorreo, req.body.campoTelefono],
      function (error, result) {
         if (error) {
            throw error;
         } else {
            console.log(result);
         }
      }
   );
   connection.commit();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registro/registro', { title: 'Express' });
});

module.exports = router;
