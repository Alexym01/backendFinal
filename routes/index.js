const express = require('express');
const router = express.Router();
const controllers = require("../controllers/controller")
const {validarId} = require("../middlewares/validarId")
const {check} = require("express-validator");

// GET
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ver', controllers.verTodos)
router.get('/ver/:id', validarId, controllers.verCampeon)
router.get('/horaBsAs', controllers.verHora)

// POST
router.post('/crear', [
  check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
  check("rol").not().isEmpty().withMessage("El campo rol es requerido"),
  check("daño").not().isEmpty().withMessage("El campo daño es requerido"),
  check("region").not().isEmpty().withMessage("El campo region es requerido")
], controllers.crearCampeon)

// PUT
router.put('/editar/:id',validarId, [
  check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
  check("rol").not().isEmpty().withMessage("El campo rol es requerido"),
  check("daño").not().isEmpty().withMessage("El campo daño es requerido"),
  check("region").not().isEmpty().withMessage("El campo region es requerido")
], controllers.editarCampeon)

// DELETE
router.delete('/eliminar/:id', validarId, controllers.eliminarCampeon)



module.exports = router;
