import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../Services/api'

import './styles.css'

import logoImg from "../../assets/logo3.png"
import patinhasImg from "../../assets/banner.jpg"

export default function Logon() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleLogon(e) {
        e.preventDefault()

        const data = {
            id,
            password
        }

        try {
            const response = await api.post('sessionsOng', data)
            
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        }
        catch (err) {
            alert('Erro no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                    <img src={logoImg} alt="Super Patinhas"/>

                    <form onSubmit={handleLogon}>
                        <h1>Faça seu Logon</h1>
                        
                        <input 
                            placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        ></input>

                        <input 
                            placeholder="Sua Senha" 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>

                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#ed8f00"/>
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
                <img className="img" src={patinhasImg} alt="Supers"/>
        </div>
    )
}