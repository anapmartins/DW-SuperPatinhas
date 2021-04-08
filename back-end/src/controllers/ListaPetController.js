const connection = require("../database/conection")

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .select('incidents.*')

        return response.json(incidents)
    }
}