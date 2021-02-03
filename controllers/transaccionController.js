const {crearTransaccion, consultarCuotas, confirmarTransaccion, consultarEstado, reversarTransaccion} = require('../services/transbankService');
const { validationResult, body } = require('express-validator');

exports.crearTransaccion = async (req, res) => {
    console.log('crear trx... ');
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    console.log('paso.. ');
    try {

        crearTransaccion(req.body, res);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error aqui');
    }
}

// Consultar cuota
exports.consultarCuotas = async (req, res) => {
    console.log('consultar Cuota... ');
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    
    const { token } = req.params;
    console.log('token====: '+token);
    try {
        
        consultarCuotas(req.body.cantidadCuotas, token, res);
            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error aqui');
    }
}

// Confirmar Trx
exports.confirmarTransaccion = async (req, res) => {
    console.log('confirmar Transaccion... ');
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    
    const { token } = req.params;
    console.log('token====: '+token);
    try {
        
        confirmarTransaccion(req.body.periodoGracia, token, res);
            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error aqui');
    }
}


// Consultar Trx
exports.consultarEstado = async (req, res) => {
    console.log('consulta estado... ');
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    
    const { token } = req.params;
    console.log('token====: '+token);
    try {
        
        consultarEstado( token, res );
            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error aqui');
    }
}

// Reversar Trx
exports.reversarTransaccion = async (req, res) => {
    console.log('reversar Cuota... ');
    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }
    
    const { token } = req.params;
    console.log('token====: '+token);
    try {
        
        reversarTransaccion(req.body.monto, token, res);
            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error aqui');
    }
}