import React, { useState } from 'react'
import st from './RateCard.module.css'
import { FaStar } from 'react-icons/fa'

// const RateCard = () => {
//     const [ rating, setRating ] = useState(null);
//     const [ hover, setHover ] = useState(null);

//     const rateOnClick = (e) => {
//         e.preventDefault();
//         console.log(rating)
//     }

//     return (
//         <div className={st.rate__body}>
//             {[...Array(10)].map((star, i) => {
//                 const ratingValue = i + 1
//                 return (
//                     <label>
//                         <input 
//                         type='radio' 
//                         name='rating' 
//                         value={ratingValue}
//                         onClick={()=> setRating(ratingValue)}
//                         onChange={rateOnClick} />
//                         <FaStar 
//                         className={st.star}
//                         color={ratingValue <= (hover || rating) ? "#e1bf1f" : "#e4e5e9"} 
//                         onMouseEnter={()=> setHover(ratingValue)}
//                         onMouseLeave={()=> setHover(null)}
//                         size={40} />
//                     </label>
//                 )
//             })}
//         </div>
//     )
// }

// export default RateCard

const RateCard = () => {
    const stars = Array(10).fill(0)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = (value) => {
        setCurrentValue(value)
        console.log(currentValue)
    }

    const handleMouseOver = (value) => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div className={st.rate__body}>
            {stars.map((_, index) => {
                return (

                    <FaStar
                        className={st.star}
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        color={index <= (hoverValue || currentValue) ? "#e1bf1f" : "#e4e5e9"}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40} />
                )
            })}
        </div>
    )
}

export default RateCard