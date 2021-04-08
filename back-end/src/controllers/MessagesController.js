const connection = require('../database/conection')

module.exports = {
    async index(request, response) {
        const messages = await connection('messages').select('*')
        return response.json(messages)
    },

    async create(request, response) {
        const { title, description } = request.body
        
        //acessando os ids das chaves estrangeiras
        const user_id = request.headers.user
    
        const [id] = await connection('messages').insert({
            title,
            description,
            user_id,
        })
    
        return response.json({ id })
    }
}