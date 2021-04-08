const express = require('express')

// importando os controllers
const OngController = require('./controllers/OngController')
const UsuarioController = require('./controllers/UsuarioController')
const IncidentController = require('./controllers/IncidentController')
const SessionOngController = require('./controllers/SessionOngController')
const SessionUserController = require('./controllers/SessionUserController')
const EventController = require('./controllers/EventController')
const AdoptionController = require('./controllers/AdoptionController')
const ListaEventoController = require('./controllers/ListaEventoController')
const MessagesController = require('./controllers/MessagesController')

const routes = express.Router()

// metodos de sessao
routes.post('/sessionsOng', SessionOngController.create)
routes.post('/sessionsUser', SessionUserController.create)

// metodos relacionados a Ong
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// metodos relacionados a usuários
routes.get('/usuarios', UsuarioController.index)
routes.post('/usuarios', UsuarioController.create)

// metodos relacionados a pets
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

//listagem
routes.get('/listaPet', ListaEventoController.index)
routes.get('/listaEvento', ListaEventoController.index)

// metodos relacionados a eventos
routes.get('/events', EventController.index)
routes.post('/events', EventController.create)
routes.delete('/events:id', EventController.delete)

// metodos relacionados a adoção
routes.get('/adoption', AdoptionController.index)
routes.post('/adoption', AdoptionController.create)

// metodos relacionados a messagens
routes.get('/messages', MessagesController.index)
routes.post('/messages', MessagesController.create)

module.exports = routes