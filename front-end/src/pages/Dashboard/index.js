import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiHeart, FiLogIn} from 'react-icons/fi'

import api from '../../Services/api'

import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function Profile() {
    const [incidents, setIncidents] = useState([])
    const [events, setEvents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const userId = localStorage.getItem('userId')
    const petId = localStorage.getItem('petId')

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

    function handleAdotar() {
        localStorage.getItem('userId')
        localStorage.getItem('incidentiId')
        localStorage.getItem('ongId')
        history.push('/adoption')
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Super Patinhas"/>

                <Link className="button" to="/fundacao">
                    Sobre a fundação
                </Link>

                <Link className="button" to="/faleConosco">
                    Fale conosco
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

                            <button onClick={() => handleAdotar()} type="button">
                                <FiHeart size={20} color="#ed8f00"></FiHeart>
                            </button>
                        </li>  
                    ))}
                </ul>
                
                <ul>
                    {events.map(event =>(
                            <li key={event.id}>
                                <strong>Título</strong>
                                <p>{event.title}</p>

                                <strong>Data</strong>
                                <p>{event.date}</p>

                                <strong>Horário</strong>
                                <p>{event.hour}</p>

                                <strong>Localização</strong>
                                <p>{event.localization}</p>

                                <strong>Descrição</strong>
                                <p>{event.description}</p>
                            </li>
                        ))}         
                </ul>
            </div>
        </div> 
    )
}

/** */
