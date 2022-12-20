import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => {
    return (
        <div className='text-white font-semibold text-center bg-slate-600 rounded-lg p-6 mx-3 mb-12 mt-24'>
            <h2 className='text-2xl'>Book Now</h2>
            <p className='my-3'>Making your tours a remembering one is the promise Milestone Travels makes to every member. Milestone Travels gives all types of flexibility regarding payment methods or transports along with lots of travel packages. Easy visa applications for international or domestic travel have never been so easy.
                In a word, Milestone Travels ensure you a safe and secured holiday tour every time with your family and loved ones. Milestone Travels tries to do almost everything beneficial to be the best travel agency for you.
                So, don’t waste any time and contact Milestone Travels for the next trip you are having.</p>
            <Link to='/addservice' className='btn btn-accent btn-outline text-white'>Book</Link>
        </div>
    );
};

export default BookNow;