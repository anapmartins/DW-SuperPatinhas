const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Query params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: parametros utilização para identificar recursos
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333)