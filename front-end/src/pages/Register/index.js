import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import crypto from 'crypto'
import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function Register() {
    //criacao de id das ONGs
    const id = crypto.randomBytes(4).toString('HEX')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            id,
            name,
            email,
            phone,
            password,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem 
                       os pets e os eventos feitos pela sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar a Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Telefone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    ></input>

                    <input 
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        ></input>

                        <input 
                            placeholder="UF" 
                            style={{ width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        ></input>
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}