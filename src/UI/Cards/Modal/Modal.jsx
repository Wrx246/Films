import React from "react";
import st from './Modal.module.css';


const Modal = ({ children, visible, setVisible, setPlayTrailer }) => {

    const rootStyle = [st.modal]

    if (visible) {
        rootStyle.push(st.active)
    }

    const handlerClick = (e) => {
        e.preventDefault();
        setVisible(false)
        setPlayTrailer(false)
    }

    return (
        <div className={rootStyle.join(' ')}>
            <div className={st.modalContent}>
                {children}
                    <button onClick={handlerClick}  className={st.closeButton} type='button'>X</button>
            </div>
        </div>
    )
}

export default Modal;