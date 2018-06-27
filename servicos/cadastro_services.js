const moment = require('moment')
const axios = require('axios')

const baseUrl = 'http://localhost:3001/clientes'

const getCliente = async id => {
    const resp = await axios.get(`${baseUrl}/${id}`)
    return resp.data
} 

module.exports = {
    getCliente
}

