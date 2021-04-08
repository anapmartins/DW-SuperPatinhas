const crypto = require('crypto')
const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, phone, password, city, uf} = request.body

        //criacao de id das ONGs
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            phone,
            password,
            city,
            uf
        })

        return response.json({ id, password })
    }
}