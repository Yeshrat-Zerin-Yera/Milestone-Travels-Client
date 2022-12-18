import React, { useEffect, useState } from 'react';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const ServiceReviewSectionReviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    // const { userImg, userName, userEmail, reviewMessage, rating } = reviews;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews);

    return (
        <div className='lg:w-1/2 md:mr-6 mb-6'>
            {
                reviews.map(review => <div key={review?._id} className='m-3 border p-6 rounded-lg'>
                    <div className='flex items-center gap-3 mb-3'>
                        <img src={review.userImg} alt="" className='rounded-full w-12 h-12' />
                        <h2 className='text-2xl'>{review.userName}</h2>
                    </div>
                    <p>{review.userEmail}</p>
                    {
                        review?.reviewMessage ? <p className='my-3'>{review.reviewMessage}</p> : <p className='my-3 text-slate-700'><i>No Message</i></p>
                    }
                    <ServiceRating value={review?.rating}></ServiceRating>
                </div>)
            }
        </div>
    );
};

export default ServiceReviewSectionReviews;