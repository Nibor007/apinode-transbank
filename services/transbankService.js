const clienteAxios = require('../config/axios');
const { default: axios } = require("axios");


exports.crearTransaccion = async( transaccion, response  ) =>{
    console.log('crearTransaccion....');
    const headers = {
        'Content-Type':'application/json',
        'Tbk-Api-Key-Id': '597055555530',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    };
    try {
        console.log('respuesta: '+ transaccion.ordenCompra);
        const url = '/rswebpaytransaction/api/webpay/v1.0/transactions';
        console.log('url: ' + url);
        const data = {
            'buy_order':transaccion.ordenCompra,
            'session_id':transaccion.sessionId,
            'amount':transaccion.monto,
            'cvv':transaccion.cvv,
            'card_number':transaccion.numeroTarjeta,
            'card_expiration_date':transaccion.fechaExpiracion
        }
        const respuesta = await clienteAxios.post( url, data, {
            headers: headers
        });

        console.log('TOken Service: '+ respuesta.data.token);
        response.json({'token':respuesta.data.token});
    } catch (error) {
        console.log('hubo un error servicio'+ error);
        response.json('ERROR' + error);
    }
};

exports.consultarCuotas = async( cantidadCuotas, token, response  ) =>{
        
    const headers = {
        'Content-Type':'application/json',
        'Tbk-Api-Key-Id': '597055555530',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    };
    try {
        console.log('token: ' + token);
        const url = '/rswebpaytransaction/api/webpay/v1.0/transactions/'+token+'/installments';
        console.log('URL: ' + url);
        const data = {
            'installments_number':cantidadCuotas
        }
        const respuesta = await clienteAxios.post( url, data, {
            headers: headers
        });

        response.json(respuesta.data);
    } catch (error) {
        console.log('hubo un error servicio'+ error);
        response.json('ERROR' + error);
    }
};

exports.confirmarTransaccion = async( periodoGracia, token, response  ) =>{
        
    const headers = {
        'Content-Type':'application/json',
        'Tbk-Api-Key-Id': '597055555530',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    };
    try {
        console.log('token: ' + token);
        const url = '/rswebpaytransaction/api/webpay/v1.0/transactions/'+token;
        console.log('URL: ' + url);
        const data = {
            'grace_period':periodoGracia
        }

        const respuesta = await clienteAxios.put( url, data, {
            headers: headers
        });

        response.json(respuesta.data);
    } catch (error) {
        console.log('hubo un error servicio'+ error);
        response.json('ERROR' + error);
    }
};

exports.consultarEstado = async( token, response  ) =>{
        
    const headers = {
        'Content-Type':'application/json',
        'Tbk-Api-Key-Id': '597055555530',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    };
    try {
        console.log('token: ' + token);
        const url = '/rswebpaytransaction/api/webpay/v1.0/transactions/'+token;
        console.log('URL: ' + url);
            /*const respuesta = await clienteAxios.post( 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions', data, {
                headers: headers
            });*/
        const respuesta = await clienteAxios.get( url, {
            headers: headers
        });

        response.json(respuesta.data);
    } catch (error) {
        console.log('hubo un error servicio'+ error);
        response.json('ERROR' + error);
    }
};

exports.reversarTransaccion = async( monto, token, response  ) =>{
        
    const headers = {
        'Content-Type':'application/json',
        'Tbk-Api-Key-Id': '597055555530',
        'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    };
    try {
        console.log('token: ' + token);
        const url = '/rswebpaytransaction/api/webpay/v1.0/transactions/'+token+'/refunds';
        console.log('URL: ' + url);
        const data = {
            'amount':monto
        }
            /*const respuesta = await clienteAxios.post( 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions', data, {
                headers: headers
            });*/
        const respuesta = await clienteAxios.post( url, data, {
            headers: headers
        });

        response.json(respuesta.data);
    } catch (error) {
        console.log('hubo un error servicio'+ error);
        response.json('ERROR' + error);
    }
};


//module.exports = crearTransaccion;