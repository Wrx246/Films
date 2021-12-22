import React from "react";
import st from './Input.module.css'

const Input = () => {
    return (
        <div className={st.input}>
            <input className={st.input__body} type="text" placeholder={'Search...'}/>
        </div>
    )
}

export default Input;