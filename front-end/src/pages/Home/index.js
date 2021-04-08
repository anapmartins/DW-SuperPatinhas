import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logoImg from "../../assets/logo3.png"
import patinhasImg from "../../assets/banner.jpg"

export default function Home() {
    return (
        <div className="home-container">
            <section className="form">
                <img src={logoImg} alt="Super Patinhas"/>

                <Link className="back-link" to="/logon">
                    <FiLogIn size={16} color="#ed8f00"/>
                        Ong
                </Link>

                <Link className="back-link" to="/UserLogon">
                    <FiLogIn size={16} color="#ed8f00"/>
                        Usuário
                </Link>
                </section>
                <img className="img" src={patinhasImg} alt="Supers"/>
        </div>
    )
}