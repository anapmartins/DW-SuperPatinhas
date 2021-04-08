const connection = require("../database/conection")

module.exports = {
    async create(request, response) {
        const { email, password } = request.body

        const usuario = await connection('usuarios')
        .where('email', email)
        .where('password', password)
        .select('name')
        .first()

        if (!usuario) {
            return response.status(400).json({error:'No user found'})
        }

        return response.json(usuario)
    }
}