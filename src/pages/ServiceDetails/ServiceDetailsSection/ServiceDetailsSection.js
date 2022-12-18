import React from 'react';
import ServiceRating from '../../Services/ServiceRating/ServiceRating';

const ServiceDetailsSection = ({ service }) => {
    const { serviceName, img, price, rating, description } = service;
    console.log(service);

    return (
        <div className='flex flex-col lg:flex-row mx-3'>
            {/* Image */}
            <div className='md:mr-6 lg:w-1/2'>
                <img src={img} alt="" className='rounded-lg mb-6 w-full' />
            </div>
            {/* Details */}
            <div className='lg:w-1/2'>
                <h2 className='text-4xl'>{serviceName}</h2>
                <p className='my-6'>{description}</p>
                <div className='flex justify-between items-center'>
                    <ServiceRating value={rating}></ServiceRating>
                    <p className='text-2xl text-warning'>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsSection;