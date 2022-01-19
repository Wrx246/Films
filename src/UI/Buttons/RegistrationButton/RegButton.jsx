import React from 'react';
import st from './RegButton.module.css';


const RegButton = ({ name, ...props}) => {
    return (
        <div>
            <button type='submit' onClick={ (event) => {event.preventDefault()}} className={st.regButton__body}>{name}</button>
        </div>
    )
}

export default RegButton;