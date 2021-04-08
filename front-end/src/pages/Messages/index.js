import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../Services/api'

import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function Profile() {
    const [messages, setMessages] = useState([])

    const history = useHistory()

    const user_id = localStorage.getItem('user_id')

    useEffect(() => {
        api.get('messages', {
            headers: {
                authorization: user_id
            }
        }).then(response => {
            setMessages(response.data)
        })
    }, [user_id])

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

                <Link className="button" to="/dashboard">
                    Dashboard
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#ed8f00"></FiPower>
                </button>
            </header>

            <h1>Mensagens Cadastradas</h1>
            
            <div>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>
                            <strong>Título</strong>
                            <p>{message.title}</p>

                            <strong>Descrição</strong>
                            <p>{message.description}</p>
                        </li> 
                    ))}
                </ul>
            </div>
        </div> 
    )
}

/** */