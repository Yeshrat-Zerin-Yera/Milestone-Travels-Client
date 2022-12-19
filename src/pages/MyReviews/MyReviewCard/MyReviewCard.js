import React from 'react';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import CalculateTime from '../../Calculations/CalculateTime';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const MyReviewCard = ({ review, handleDeleteMyReview }) => {
    const { _id, userImg, userName, userEmail, serviceName, date, time, reviewMessage, rating } = review;

    return (
        <div className='border p-6 rounded-lg m-3 relative'>
            <div className='flex items-center gap-3'>
                {/* Image */}
                {
                    userImg ? < img src={userImg} alt="" className='rounded-full h-12 w-12' /> : <FaUser className='rounded-full h-12 w-12' />
                }
                {/* Name */}
                <h2 className='text-[20px]'>{userName}</h2>
            </div>
            {/* Email */}
            <p className='my-3'>{userEmail}</p>
            {/* Rating */}
            <ServiceRating value={rating}></ServiceRating>
            {/* Date & Time */}
            <div className='my-3'>
                <CalculateTime time={time}></CalculateTime>
                <span className='ml-3'>{date}</span>
            </div>
            {/* Service Name */}
            <h2 className='mb-3 text-2xl'>{serviceName}</h2>
            {/* Message */}
            <div className='break-words overflow-clip'>
                {
                    reviewMessage ? <p>{reviewMessage}</p> : <p className='text-slate-600'><i>No Message</i></p>
                }
            </div>
            <div className='flex absolute top-0 right-0 p-6'>
                <FaEdit className='text-green-500 hover:text-green-300 mr-3' />
                <FaTrash onClick={() => handleDeleteMyReview(_id)} className='text-red-500 hover:text-red-300' />
            </div>
        </div>
    );
};

export default MyReviewCard;