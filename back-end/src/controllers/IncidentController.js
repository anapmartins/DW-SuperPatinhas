const  connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        //visualizar cinco registros por vez
        const { page = 1} = request.query

        //quantidade total de dados
        const [count] = await connection('incidents').count()

        //paginacao
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.phone', 
            'ongs.city', 
            'ongs.uf'
        ])

        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents)
    },

    async create(request, response) {
        const {title, namePet, age, breed, vaccine, description} = request.body
        
        //acessando o id da Ong
        const ong_id = request.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            namePet,
            age,
            breed,
            vaccine,
            description,
            ong_id
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete()

        return response.status(204).send() 
    }
}