const connection = require("../database/conection")

module.exports = {
    async create(request, response) {
        const { id, password } = request.body

        const ong = await connection('ongs')
        .where('id', id)
        .where('password', password)
        .select('name')
        .first()

        if (!ong) {
            return response.status(400).json({error:'No ONG found with this ID'})
        }

        return response.json(ong)
    }
}