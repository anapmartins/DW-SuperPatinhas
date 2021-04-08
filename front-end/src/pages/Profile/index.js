import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../Services/api'

import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function Profile() {
    const [incidents, setIncidents] = useState([])
    const [events, setEvents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    useEffect(() => {
        api.get('listaPet', {
            headers: {
                authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    useEffect(() => {
        api.get('listaEvento', {
            headers: {
                authorization: ongId
            }
        }).then(response => {
            setEvents(response.data)
        })
    }, [ongId])

    async function handleDeletePet(id) {
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId
                }
            })
            setIncidents.filter(incident => incident.id !== id)
        }
        catch (err) {
            alert('Erro ao deletar o caso, tente novamente')
        }
    }

    async function handleDeleteEvent(id) {
        try{
            await api.delete(`events/${id}`, {
                headers: {
                    authorization: ongId
                }
            })
            setEvents.filter(event => event.id !== id)
        }
        catch (err) {
            alert('Erro ao deletar o caso, tente novamente')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Super Patinhas"/>

                <Link className="button" to="/incidents/newPet">
                    Cadastrar Novo Pet
                </Link>

                <Link className="button" to="/incidents/newEvent">
                    Cadastrar Novo Evento
                </Link>

                <Link className="button" to="/messages">
                    Ver Mensagens
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#ed8f00"></FiPower>
                </button>
            </header>

            <h1>Dados Cadastrados</h1>
            
            <div>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Título</strong>
                            <p>{incident.title}</p>
                                
                            <strong>Nome do Pet</strong>
                            <p>{incident.namePet}</p>
                                
                            <strong>Idade</strong>
                            <p>{incident.age}</p>

                            <strong>Raça</strong>
                            <p>{incident.breed}</p>

                            <strong>Vacinas</strong>
                            <p>{incident.vaccine}</p>

                            <strong>Descrição</strong>
                            <p>{incident.description}</p>

                            <button onClick={() => handleDeletePet(incident.id)} type="button">
                                <FiTrash2 size={20} color="#ed8f00"></FiTrash2>
                            </button>
                        </li> 
                    ))}
                    

                    {events.map(event =>(
                            <li key={event.id}>
                                
                                <p>{event.title}</p>

                                <strong>Data</strong>
                                <p>{event.date}</p>

                                <strong>Horário</strong>
                                <p>{event.hour}</p>

                                <strong>Localização</strong>
                                <p>{event.localization}</p>

                                <strong>Descrição</strong>
                                <p>{event.description}</p>

                                <button onClick={() => handleDeleteEvent(event.id)} type="button">
                                    <FiTrash2 size={20} color="#ed8f00"></FiTrash2>
                                </button>
                            </li>
                        ))}         
                </ul>
            </div>
        </div> 
    )
}

/** */