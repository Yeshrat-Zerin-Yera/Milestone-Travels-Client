import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReviewSectionForm = ({ service }) => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(5);

    // Handle Add Review
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.message.value;
        const userImg = user?.photoURL;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const serviceId = service?._id;
        const review = {
            userImg,
            userName,
            userEmail,
            serviceId,
            reviewMessage,
            rating
        }
        if (user) {
            console.log(review);
        }
        else {
            toast.error('Sign In To Add Review');
        }
        fetch('http://localhost:5000/reviews', {
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
                    event.target.reset();
                }
            })
    };

    // Handle Rating
    const handleRating = event => {
        const rating = event.target.value;
        setRating(rating);
    };

    return (
        < form onSubmit={handleAddReview} className='lg:w-1/2 border rounded-lg p-10 bg-base-200' >
            {
                user?.uid ?
                    <>
                        < div className='flex gap-6' >
                            <div className='flex flex-col gap-6 w-1/2'>
                                <div className='flex gap-6'>
                                    {/* Image */}
                                    {
                                        user?.photoURL ? < img src={user?.photoURL} alt="" className='rounded-full h-12 w-12' /> : <FaUser className='rounded-full h-12 w-12' />
                                    }
                                    {/* Name */}
                                    <input type="text" placeholder="Name" defaultValue={user?.displayName} readOnly className="input w-full max-w-xs" />
                                </div>
                                {/* Email */}
                                <input type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input w-full max-w-xs" />
                                {/* Rating */}
                                <div onChange={handleRating} className="rating">
                                    {
                                        [1, 2, 3, 4, 5].map(value => <input key={value} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value={value} />)
                                    }
                                </div>
                            </div>
                            {/* Review Input */}
                            <div className='w-1/2'>
                                <textarea className="textarea h-full w-full" name='message' placeholder="Review" maxLength="100"></textarea>
                            </div>
                        </div >
                        <div className='flex justify-end'>
                            <button className="btn btn-secondary mt-6">Add</button>
                        </div>
                    </> :
                    <h2>Sign In To Add Review</h2>
            }
        </form >
    );
};

export default ServiceReviewSectionForm;