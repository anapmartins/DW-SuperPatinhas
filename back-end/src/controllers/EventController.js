const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        //visualizar cinco registros por vez
        const { page = 1} = request.query

        //quantidade total de dados
        const [count] = await connection('events').count()

        //paginacao
        const events = await connection('events')
        .join('ongs', 'ongs.id', '=', 'events.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'events.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.phone', 
            'ongs.city', 
            'ongs.uf'
        ])

        response.header('X-Total-Count', count['count(*)'])
        return response.json(events)
    },

    async create(request, response) {
        const {title, date, hour, localization, description} = request.body
        
        //acessando o id da Ong
        const ong_id = request.headers.authorization

        const [id] = await connection('events').insert({
            title,
            date,
            hour,
            localization,
            description,
            ong_id
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        const event = await connection('events')
        .where('id', id)
        .select('ong_id')
        .first()

        if (event.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('events').where('id', id).delete()

        return response.status(204).send() 
    }
}