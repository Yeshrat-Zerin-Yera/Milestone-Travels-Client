import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import CalculateTime from '../../Calculations/CalculateTime';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const MyReviewCard = ({ review, handleDeleteMyReview, handleReviewUpdate }) => {
    const { _id, userImg, userName, userEmail, serviceName, date, time, reviewMessage, rating } = review;
    const [newRating, setNewRating] = useState('5');
    const [newMessage, setNewMessage] = useState(null);

    // Handle New Rating
    const handleNewRating = event => {
        const rating = event?.target?.value;
        setNewRating(rating);
    };

    // Handle New Message
    const handleNewMessage = event => {
        const message = event.target.value;
        setNewMessage(message);
    };

    return (
        <div className='border p-6 rounded-lg m-3 relative'>
            {/* Review Card */}
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
            {/* Modal */}
            <div className='flex top-0 right-0 p-6 absolute'>
                <label htmlFor="my-modal"><FaEdit className='text-green-500 hover:text-green-300 mr-3' /></label>
                {/* Delete Button */}
                <FaTrash onClick={() => handleDeleteMyReview(_id)} className='text-red-500 hover:text-red-300' />
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        {/* Close Modal */}
                        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-base-100 border-0 text-error">✕</label>
                        {/* Message */}
                        <textarea onChange={handleNewMessage} className="textarea h-full w-full textarea-bordered mb-3" name='message' placeholder="Review" maxLength="100"></textarea>
                        {/* Rating */}
                        <div onChange={handleNewRating} className="rating">
                            {
                                [1, 2, 3, 4, 5].map(value => <input key={value} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value={value} />)
                            }
                        </div>
                        <div className="modal-action">
                            <label onClick={() => handleReviewUpdate(_id, newMessage, newRating)} htmlFor="my-modal" className="btn btn-accent btn-outline">Update</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;