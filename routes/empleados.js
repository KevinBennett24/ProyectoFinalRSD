const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let empleados = DB.select('empleados')
  res.status(200).send(empleados)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let empleado = DB.select('empleados', id)
  res.status(200).send(empleado)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let empleado = DB.insert('empleados', req.body)
  res.status(200).send(empleado)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let empleado = DB.update('empleados', object)
  res.status(200).send(empleado)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let empleado = DB.remove('empleados', id)
  res.status(200).send(empleado)
})

module.exports = router;
