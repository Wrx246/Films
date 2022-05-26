import React, { useState } from 'react'
import st from './RateCard.module.css'
import { FaStar } from 'react-icons/fa'

const RateCard = () => {
    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);
    return (
        <div className={st.rate__body}>
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label>
                        <input 
                        type='radio' 
                        name='rating' 
                        value={ratingValue}
                        onClick={()=> setRating(ratingValue)} />
                        <FaStar 
                        className={st.star}
                        color={ratingValue <= (hover || rating) ? "#e1bf1f" : "#e4e5e9"} 
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        size={40} />
                    </label>
                )
            })}
        </div>
    )
}

export default RateCard