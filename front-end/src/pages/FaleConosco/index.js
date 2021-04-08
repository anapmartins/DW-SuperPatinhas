import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function NewEvent() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const userId = localStorage.getItem('userId')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleMessages(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            userId,
        }

        try {
            await api.post('messages', data, {
                headers: {
                    user: userId,
                }
            })
            
            history.push('/dashboard')
        }
        catch (err) {
            alert('Erro ao enviar a mensagem, tente novamente')
        }
    }

    return (
        <div className="messages-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Nova Mensagem</h1>

                    <p>
                        Entre em contato conosco e responderemos o mais rápido possível
                    </p>

                    <Link className="back-link" to="/dashboard">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleMessages}>
                    <input 
                        placeholder="Título"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>

                    <textarea 
                        placeholder="Mensagem"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                   
                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        </div>
    )
}