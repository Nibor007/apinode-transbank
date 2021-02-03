const { default: axios } = require('axios');

const clienteAxios = axios.create({
    baseURL: 'https://webpay3gint.transbank.cl'//process.env.backendURL
});

module.exports = clienteAxios;