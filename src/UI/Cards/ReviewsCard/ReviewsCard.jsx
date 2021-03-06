import React from 'react'
import { useSelector } from 'react-redux'
import Moment from 'moment';
import { ApiImageNormal } from '../../../API/ApiKey'
import st from './ReviewsCard.module.css'

const ReviewsCard = () => {
    const reviews = useSelector((state) => state.movieReducer.reviews)



    return (
        <div className={st.review__body}>
            <div>
                <h1 className={st.review__title}>
                    Users reviews
                </h1>
                {reviews.map((review) => {
                    const formatDate = Moment(review.created_at).format("MMM Do YY");
                    return (
                        <div className={st.review__content}>
                            <div className={st.author__body}>
                                <img
                                    className={st.author__avatar}
                                    src={`${ApiImageNormal}` + review.author_details.avatar_path}
                                    alt={review.author} />
                                <div className={st.author__name}>
                                    <h4>{review.author}</h4>
                                    <p className={st.author__rate}>User rating {review.author_details.rating}</p>
                                    <p className={st.post__date}>{formatDate}</p>
                                </div>
                            </div>
                            <hr />
                            <div className={st.review__text}>
                                <p>
                                    {review.content}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={st.review__total}>
                <p>Total reviews:</p>
                <span>{reviews.length}</span>
            </div>
        </div>
    )
}

export default ReviewsCard