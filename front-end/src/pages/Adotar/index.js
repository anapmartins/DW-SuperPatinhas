import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function NewEvent() {
    const [date, setDate] = useState('')

    const ongId = localStorage.getItem('ongId')
    const userId = localStorage.getItem('userId')
    const petId = localStorage.getItem('petId')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleAdoption(e) {
        e.preventDefault()

        const data = {
            date,
            userId,
            petId,
            ongId
        }

        try {
            await api.post('adoption', data, {
                headers: {
                    user: userId,
                    pet: petId,
                    ong: ongId
                }
            })
            
            history.push('/dashboard')
        }
        catch (err) {
            alert('Erro na adoção, tente novamente')
        }
    }

    return (
        <div className="adoption-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Nova Adoção</h1>

                    <Link className="back-link" to="/dashboard">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleAdoption}>
                    <input 
                        placeholder="Data"
                        required
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    ></input>
                   
                    <button type="submit" className="button">Adotar</button>
                </form>
            </div>
        </div>
    )
}