const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        const adoptions = await connection('adoption').select('*')
        return response.json(adoptions)
    },

    async create(request, response) {
        const { date } = request.body
        
        //acessando os ids das chaves estrangeiras
        const user_id = request.headers.user
        const pet_id = request.headers.pet
        const ong_id = request.headers.ong
    
        const [id] = await connection('adoption').insert({
            date,
            user_id,
            pet_id,
            ong_id
        })
    
        return response.json({ id })
    }
}