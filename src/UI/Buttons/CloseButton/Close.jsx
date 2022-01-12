import React from "react";
import st from './Close.module.css';
import {useDispatch, useSelector} from "react-redux";
import {removeSearchFilmAction} from "../../../Redux/Reducers";

const CloseButton = ({setSearchBar}) => {
    const dispatch = useDispatch();

    const removeSearchList = () => {
        dispatch(removeSearchFilmAction());
        setSearchBar(false)
    }

    return (
        <div className={st.close__wrapper}>
            <button onClick={removeSearchList} className={st.close__body} type='button'>X</button>
        </div>
    )
}

export default CloseButton;