import React, { useState } from 'react'
import st from './RateCard.module.css'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchPostRateFilm } from '../../../API/Services/FilmService'


const RateCard = ({rateFilm}) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const dispatch = useDispatch();

    const handleClick = (rating) => {
        rateFilm(rating)
        // dispatch(fetchPostRateFilm(movieId, rating))
    }

    return (
        <div className={st.rate__body}>
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                        type='radio'
                        name='rating'
                        value={ratingValue}
                        onClick={()=> setRating(ratingValue)}
                        onChange={()=> handleClick(ratingValue)}
                        />
                        <FaStar
                            className={st.star}
                            color={ratingValue <= (hover || rating) ? "#e1bf1f" : "#e4e5e9"}
                            onMouseOver={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            size={40} />
                    </label>
                )
            })}
        </div>
    )
}

export default RateCard