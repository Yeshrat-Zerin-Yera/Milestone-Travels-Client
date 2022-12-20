import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewForm from '../ReviewForm/ReviewForm';
import ServiceDetailsSection from '../ServiceDetailsSection/ServiceDetailsSection';
import ServicesReviews from '../ServicesReviews/ServicesReviews';

const ServiceDetails = () => {
    useTitle('Service Details');
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState('5');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://milestone-travels-server.vercel.app/reviews?serviceId=${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service?._id]);

    // Handle Add Review
    const handleAddReview = event => {
        event.preventDefault();
        const form = event?.target;
        const reviewMessage = form?.message?.value;
        const userImg = user?.photoURL;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const serviceId = service?._id;
        const serviceName = service?.serviceName;
        // Get Current Date
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const time = `${current.getHours()}:${current.getMinutes()}`;
        const review = {
            userImg,
            userName,
            userEmail,
            serviceId,
            serviceName,
            reviewMessage,
            rating,
            date,
            time
        }
        if (user) {
            console.log(review);
            fetch('https://milestone-travels-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Review Added Successfully');
                        const newReviews = [review, ...reviews];
                        setReviews(newReviews)
                        event.target.reset();
                    }
                })
        }
        else {
            toast.error('Sign In To Add Review');
        }
    };

    // Handle Rating
    const handleRating = event => {
        const rating = event?.target?.value;
        setRating(rating);
    };

    return (
        <div className='my-12 font-semibold'>
            {/* Service Details Section */}
            <ServiceDetailsSection service={service}></ServiceDetailsSection>
            <div className='flex flex-col-reverse lg:flex-row my-12'>
                {/* Reviews */}
                <ServicesReviews reviews={reviews}></ServicesReviews>
                {/* Add Review Form */}
                <ReviewForm
                    handleAddReview={handleAddReview}
                    handleRating={handleRating}
                ></ReviewForm>
            </div>
        </div>
    );
};

export default ServiceDetails;