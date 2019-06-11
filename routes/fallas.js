const express = require('express')
let router = express.Router()
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'tareas'

// GET consultar coleccion de tareas
router.get('/', (req, res, next) => {
    let empleadoid = parseInt(req.body.empleadoid)
    let fallas = DB.select('fallas', null, empleadoid)
    res.status(200).send(fallas)
});

//REalizar las consultas necesarias
// GET consultar tarea especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let empleadoid = parseInt(req.body.empleadoid)
    let falla = DB.select('fallas', id, empleadoid)
    res.status(200).send(falla)
});

// POST insertar tarea
router.post('/', (req, res, next) => {
    let falla = DB.insert('fallas', req.body)
    res.status(200).send(falla)
})

//del put tambien
// PUT actualizar tarea
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let falla = DB.update('fallas', object)
    res.status(200).send(falla)
})

// DELETE borrar tarea
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let falla = DB.remove('fallas', id)
    res.status(200).send(falla)
})

module.exports = router
