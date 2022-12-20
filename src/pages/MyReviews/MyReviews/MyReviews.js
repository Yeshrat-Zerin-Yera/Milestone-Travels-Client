import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
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

    // Handle Delete MyReview
    const handleDeleteMyReview = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Delete This Review?');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review Deleted Successfully');
                        const remaining = reviews.filter(review => review?._id !== id)
                        setReviews(remaining);
                    }
                })
                .catch(error => console.error(error))
        }
    };

    if (reviews.length === 0) {
        return <h2 className='w-full h-[60vh] text-center text-4xl font-semibold flex justify-center items-center'>No Reviews Were Added</h2>
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