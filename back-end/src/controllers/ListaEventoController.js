const connection = require("../database/conection")

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization

        const events = await connection('events')
        .join('ongs', 'ongs.id', '=', 'events.ong_id')
        .select('events.*')
        
        return response.json(events)
    }
}