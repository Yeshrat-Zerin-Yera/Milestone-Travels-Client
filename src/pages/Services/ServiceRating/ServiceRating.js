import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const getStar = v => {
    switch (v) {
        case 0:
            return <FaStar className='text-slate-300' />;
        case 50:
            return <FaStarHalfAlt className='text-warning' />;
        case 100:
            return <FaStar className='text-warning' />;
        default: ;
    }
}

const getStars = value => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split('.');
    for (let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0)
    return stars;
}

const ServiceRating = ({ value }) => {
    return (
        <div className='flex'>
            {
                getStars(value).map(v => <span key={Math.random(1000000)} className='text-2xl'>{getStar(v)}</span>)
            }
        </div>
    );
};

export default ServiceRating;