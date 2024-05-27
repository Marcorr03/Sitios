var express = require('express');
var router = express.Router();
var bd = require('./bd')
/* GET home page. */
router.get('/', function(req, res, next) {
  VerHistorial(res);
});
function VerHistorial(res){
  bd.query(`select*from DATOS`, (error,resultados) => {
    if(resultados!==undefined){
      res.render('index', { filas: resultados});
    }
  });
}

router.post('/insertar', async function(req, res) {
  var {usuario,buenas,malas,calificacion}=req.body;
  bd.query(`INSERT INTO DATOS (Nombre, Buenas, Malas, Calificacion) values (?, ?, ?, ?)`, [usuario, buenas, malas, calificacion], (error,resultados) => {
    if (error) {
        console.log('Error',error)
        return
      }});
  
  
});
module.exports = router;
