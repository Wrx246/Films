import React from "react";
import st from "./MySelect.module.css";

const MySelect = ({ options, value, onChange }) => {
    return (
        <div className={st.select__wrapper}>
            <p>Sort by:</p>
            <select
                className={st.select__body}
                value={value}
                onChange={event => onChange(event.target.value)}>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
        </div >
    )
}

export default MySelect;