const express = require('express');
const router = express.Router();
const controladorOrden = require('../controladores/controladorOrden');


router.post('/:usuarioId/crear', controladorOrden.crearOrdenDesdeCarrito); 
router.get('/:usuarioId/orden/:ordenId', controladorOrden.obtenerOrden); 


/*router.put('/:id', controladorOrden.actualizarOrden); 
router.delete('/:id', controladorOrden.eliminarOrden); */

module.exports = router;