import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../Services/api'

import './styles.css'

import logoImg from "../../assets/logo3.png"
import patinhasImg from "../../assets/banner.jpg"

export default function LogonUser() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleLogon(e) {
        e.preventDefault()

        const data = {
            email,
            password
        }

        try {
            const response = await api.post('sessionsUser', data)
            
            localStorage.setItem('userEmail', email)
            localStorage.setItem('userName', response.data.name)
            history.push('/dashboard')
        }
        catch (err) {
            alert('Erro no login, tente novamente')
        }
    }

    return (
        <div className="logonU-container">
            <section className="form">
                    <img src={logoImg} alt="Super Patinhas"/>

                    <form onSubmit={handleLogon}>
                        <h1>Faça seu Logon</h1>
                        
                        <input 
                            placeholder="Seu Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        ></input>

                        <input 
                            placeholder="Sua Senha" 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>

                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/registerUser">
                            <FiLogIn size={16} color="#ed8f00"/>
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>
                <img className="img" src={patinhasImg} alt="Supers"/>
        </div>
    )
}