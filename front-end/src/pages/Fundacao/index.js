import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower} from 'react-icons/fi'

import './styles.css'

import logoImg from "../../assets/logo3.png"

export default function Fundacao() {
    const history = useHistory()

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="fundacao-container">
            <header>
                <img src={logoImg} alt="Super Patinhas"/>
    
                <Link className="button" to="/dashboard">
                    Dashboard
                </Link>
    
                <Link className="button" to="/incidents/newPet">
                    Fale conosco
                </Link>
    
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#ed8f00"></FiPower>
                </button>
            </header>
    
            <h1>
                Quem Somos
            </h1>
    
            <p>
            Hendrerit urna sodales lobortis dolor fusce metus rhoncus eu, nisi enim curabitur litora tortor dictumst per blandit, 
            primis sem leo volutpat magna sit elementum. quis diam torquent fames id magna morbi ad, nunc platea consequat fusce urna 
            consequat porttitor venenatis, nunc curabitur sit congue dolor proin. congue mattis volutpat primis risus ornare primis mollis 
            consequat mollis amet cubilia lacus ad lacus, per felis lacus enim risus duis fusce et a convallis imperdiet pellentesque. 
            dictumst dui interdum tempus iaculis suspendisse ultricies platea, vel tellus eros justo purus ac facilisis, primis ut dui egestas sociosqu conubia.  
            </p> <br />
    
            <p>
                Rhoncus erat pellentesque praesent, tempus sem.
            </p>
        </div>
    )
}