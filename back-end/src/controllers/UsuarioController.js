const crypto = require('crypto')
const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuarios').select('*')
        return response.json(usuarios)
    },

    async create(request, response) {
        const {name, email, phone, password, city, uf} = request.body

        //criacao de id das usuario
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('usuarios').insert({
            id,
            name,
            email,
            phone,
            password,
            city,
            uf
        })

        return response.json({ email, password })
    }
}