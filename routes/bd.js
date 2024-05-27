var mysql = require('mysql2')
 
var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'MARCO',
  password: '1234',
  database: 'Meca'
})
 
conexion.connect(function (error) {
  if (error)
    console.log('Problemas de conexion con mysql')
  else
    console.log('Se inicio conexion')
})
 
module.exports = conexion