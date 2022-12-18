import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReviewForm = ({ handleAddReview, handleRating }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className='m-3 lg:w-1/2'>
            < form onSubmit={handleAddReview} className='border rounded-lg p-10 bg-base-200' >
                {
                    user?.uid ?
                        <>
                            < div className='flex flex-col md:flex-row gap-6' >
                                <div className='flex flex-col gap-6 md:w-1/2'>
                                    <div className='flex gap-6 w-full'>
                                        {/* Image */}
                                        {
                                            user?.photoURL ? < img src={user?.photoURL} alt="" className='rounded-full h-12 w-12' /> : <FaUser className='rounded-full h-12 w-12' />
                                        }
                                        {/* Name */}
                                        <input type="text" placeholder="Name" defaultValue={user?.displayName} readOnly className="input w-full" />
                                    </div>
                                    {/* Email */}
                                    <input type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input" />
                                    {/* Rating */}
                                    <div onChange={handleRating} className="rating">
                                        {
                                            [1, 2, 3, 4, 5].map(value => <input key={value} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" value={value} />)
                                        }
                                    </div>
                                </div>
                                {/* Review Input */}
                                <div className='md:w-1/2'>
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
        </div>
    );
};

export default ReviewForm;