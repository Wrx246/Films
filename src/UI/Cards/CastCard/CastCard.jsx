import React from 'react'
import { useSelector } from 'react-redux'
import { ApiImageNormal } from '../../../API/ApiKey'
import st from './CastCard.module.css'

const CastCard = () => {
    const casts = useSelector((state) => state.movieReducer.casts)

    return (
        <div className={st.cast__wrapper}>
            {casts.map(cast => {
                return (
                    <div className={st.cast__body}>
                    <img className={st.cast__img}
                        src={`${ApiImageNormal}` + cast.profile_path}
                        alt={cast.name} />
                    <p>{cast.name} as <br /> {cast.character}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CastCard