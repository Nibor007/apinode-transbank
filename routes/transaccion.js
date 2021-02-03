const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');
const auth = require('../middlewares/validar-campos');
const { check } = require('express-validator');

// api/proyectos

// Crea proyectos
router.post(
    '/',
    [
        check('ordenCompra', 'La orden de comprar es obligatoio').not().isEmpty(),
        check('sessionId', 'La sessionID es obligatoio').not().isEmpty(),
        check('monto', 'El monto es obligatoio').not().isEmpty(),
        check('cvv', 'El cvv es obligatoio').not().isEmpty(),
        check('numeroTarjeta', 'El numero de tarjeta es obligatorio').not().isEmpty(),
        check('fechaExpiracion', 'la Fecha expiración es obligatoio').not().isEmpty()
    ],
    transaccionController.crearTransaccion
);

// Consultar Cuotas
router.post('/cuotas/:token',
    [
        check('cantidadCuotas', 'la cantidad de cuotas es obligatoria').not().isEmpty()
    ],
    transaccionController.consultarCuotas
);

// Consultar estado de la transaccion
router.get('/:token',
    transaccionController.consultarEstado
);

// Confirmar transaccion
router.put('/:token',
    [
        check('periodoGracia', 'El periodo de gracia es obligatoio').not().isEmpty()
    ],
    transaccionController.confirmarTransaccion
);

// Reversar Trx
router.post('/pago/:token',
    [
        check('monto', 'El monto es obligatorio').not().isEmpty()
    ],
    transaccionController.reversarTransaccion
);

module.exports = router;