import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../Services/api'
import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function NewPet() {
    const [title, setTitle] = useState('')
    const [namePet, setNamePet] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')
    const [vaccine, setVaccine] = useState('')
    const [description, setDescription] = useState('')

    const ongId = localStorage.getItem('ongId')

    //responsavel por levar o usuario para tela de logon
    const history = useHistory()

    //funcao responsavel por fazer o cadastro
    async function handlePet(e) {
        e.preventDefault()

        const data = {
            title,
            namePet,
            age,
            breed,
            vaccine,
            description,
            ongId
        }

        try {
            await api.post('incidents', data, {
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
        <div className="pet-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Super Patinhas"/>

                    <h1>Cadastrar novo pet</h1>
                    <p>Descreva o novo pet detalhadamente para uma
                       pessoa poder amá-lo 
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#ed8f00"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handlePet}>
                    <input 
                        placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Nome do Pet"
                        value={namePet}
                        onChange={e => setNamePet(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Idade"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    ></input>

                    <input 
                        placeholder="Raça"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                    ></input>

                    <textarea 
                        placeholder="Vacinas"
                        value={vaccine}
                        onChange={e => setVaccine(e.target.value)}
                    ></textarea>

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                   
                    <button type="submit" className="button">Cadastrar Pet</button>
                </form>
            </div>
        </div>
    )
}