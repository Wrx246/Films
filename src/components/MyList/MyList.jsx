import React from "react";
import st from './MyList.module.css';
import MyCard from "../../UI/Cards/MyCard/MyCard";

const MyList = () => {
    return (
        <div className={st.myList__wrapper}>
            <div className={st.myList__body}>
                <h1 className={st.myList__title}>My watch list</h1>
                <div className={st.myList__line}></div>
                <div className={st.myList__group}>
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                </div>
            </div>
        </div>
    )
}

export default MyList;