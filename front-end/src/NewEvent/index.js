import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function NewEvent() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [localization, setLocalization] = useState('')
    const [description, setDescription] = useState('')

    const ongId = localStorage.getItem('ongId')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleEvent(e) {
        e.preventDefault()

        const data = {
            title,
            date,
            hour,
            localization,
            description,
            ongId
        }

        try {
            await api.post('events', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            
            history.push('/profile')
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return (
        <div className="event-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Cadastrar novo evento</h1>
                    <p>Descreva detalhadamente um novo evento
                        da sua ONG
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleEvent}>
                    <input 
                        placeholder="Título"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>

                    <input
                        placeholder="Data do Evento"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Horas"
                        required
                        value={hour}
                        onChange={e => setHour(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Localização"
                        required
                        value={localization}
                        onChange={e => setLocalization(e.target.value)}
                    ></input>

                    <textarea 
                        placeholder="Descrição"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                   
                    <button type="submit" className="button">Cadastrar Evento</button>
                </form>
            </div>
        </div>
    )
}
