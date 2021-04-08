import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import crypto from 'crypto'
import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function RegisterUser() {
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
    async function handleRegisterUser(e) {
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
            const response = await api.post('usuarios', data)
            alert(`Cadastrado com Sucesso: ${response.data.email}`)
            history.push('/')
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return (
        <div className="registerUser-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma, encontre seu novo amigo,
                        veja os eventos relacionados as ongs e faça suas doações em favor
                        da causa animal.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar a Logon
                    </Link>
                </section>

                <form onSubmit={handleRegisterUser}>
                    <input 
                        placeholder="Nome do Usuário"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Telefone"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    ></input>

                    <input 
                        type="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            required
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        ></input>

                        <input 
                            placeholder="UF" 
                            required
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