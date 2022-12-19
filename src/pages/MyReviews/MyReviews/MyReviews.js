import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import CalculateTime from '../../Calculations/CalculateTime';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const MyReviews = () => {
    useTitle('My Reviews');
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const HandleDeleteMyReview = () => {

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-semibold my-12'>
            {
                reviews.map(review => <div key={Math.random(100000000000)} className='border p-6 rounded-lg m-3 relative'>
                    <div className='flex items-center gap-3'>
                        {/* Image */}
                        {
                            review?.userImg ? < img src={review?.userImg} alt="" className='rounded-full h-12 w-12' /> : <FaUser className='rounded-full h-12 w-12' />
                        }
                        {/* Name */}
                        <h2 className='text-[20px]'>{review?.userName}</h2>
                    </div>
                    {/* Email */}
                    <p className='my-3'>{review?.userEmail}</p>
                    {/* Rating */}
                    <ServiceRating value={review?.rating}></ServiceRating>
                    {/* Date & Time */}
                    <div className='my-3'>
                        <CalculateTime review={review}></CalculateTime>
                        <span className='ml-3'>{review?.date}</span>
                    </div>
                    {/* Service Name */}
                    <h2 className='mb-3 text-2xl'>{review?.serviceName}</h2>
                    {/* Message */}
                    <div className='break-words overflow-clip'>
                        {
                            review?.reviewMessage ? <p>{review?.reviewMessage}</p> : <p className='text-slate-600'><i>No Message</i></p>
                        }
                    </div>
                    <div className='flex absolute top-0 right-0 p-6'>
                        <FaEdit className='text-green-500 hover:text-green-300 mr-3' />
                        <FaTrash onClick={() => HandleDeleteMyReview(review?._id)} className='text-red-500 hover:text-red-300' />
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyReviews;