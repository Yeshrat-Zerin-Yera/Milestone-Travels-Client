import { FaUser } from 'react-icons/fa';
import CalculateTime from '../../Calculations/CalculateTime';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const ServicesReviews = ({ reviews }) => {
    return (
        <div className='lg:w-1/2 h-96 overflow-y-auto no-scrollbar'>
            {
                reviews.map(review => <div key={review?._id} className='flex justify-between border p-6 rounded-lg m-3'>
                    <div className='mr-12'>
                        <div className='flex items-center gap-3 mb-3'>
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
                        <div className='mt-3'>
                            <CalculateTime time={review?.time}></CalculateTime>
                            <span className='ml-3'>{review?.date}</span>
                        </div>
                    </div>
                    {/* Message */}
                    <div className='break-words overflow-clip'>
                        {
                            review?.reviewMessage ? <p className='my-3'>{review.reviewMessage}</p> : <p className='my-3 text-slate-600'><i>No Message</i></p>
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServicesReviews;