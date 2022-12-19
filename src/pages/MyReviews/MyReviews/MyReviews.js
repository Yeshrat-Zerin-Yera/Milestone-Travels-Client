import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReviews = () => {
    useTitle('My Reviews');
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDeleteMyReview = (id) => {

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-semibold my-12'>
            {
                reviews.map(review => <MyReviewCard
                    key={review?._id}
                    review={review}
                    handleDeleteMyReview={handleDeleteMyReview}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;