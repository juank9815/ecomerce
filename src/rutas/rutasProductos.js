const express = require('express');
const router = express.Router();
const controladorProducto = require('../controladores/controladorProducto');

// Rutas para el CRUD de productos
router.post('/', controladorProducto.crearProducto); 
router.get('/', controladorProducto.obtenerProductos); 
router.put('/:id', controladorProducto.actualizarProducto); 
router.delete('/:id', controladorProducto.eliminarProducto); 

module.exports = router;
