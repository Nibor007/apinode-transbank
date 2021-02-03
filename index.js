const express = require('express');
const cors = require('cors');
const {reversa} = require('./routes/transaccion');

require('dotenv').config();

// Crear el servidor de express
const app = express();

// CORS
app.use(cors());
app.options('*', cors());

// Puerto de la app
const port = process.env.PORT || 4000;

//Directorio publico
//app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas de la app
app.use('/api/transbank/transaccion/crear', require('./routes/transaccion'));
app.use('/api/transbank/transaccion/consultar', require('./routes/transaccion'));
app.use('/api/transbank/transaccion/confirmar', require('./routes/transaccion'));
app.use('/api/transbank/transaccion/consultarEstado', require('./routes/transaccion'));
app.use('/api/transbank/transaccion/reversar', require('./routes/transaccion'));

//app.use('/api/search', require('./routes/auth') );

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

module.exports = app;