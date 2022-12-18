import React from 'react';
import { Link } from 'react-router-dom';
import ServiceRating from '../ServiceRating/ServiceRating';

const ServiceCard = ({ service }) => {
    const { _id, serviceName, img, price, rating, description } = service;

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            {/* Service Image */}
            <figure><img src={img} alt="Shoes" /></figure>
            {/* Service Details */}
            <div className="card-body">
                <p className='text-right text-2xl text-warning font-semibold'>{price}$</p>
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <div className="card-actions justify-between items-center">
                    <ServiceRating value={rating}></ServiceRating>
                    <Link to={`/services/${_id}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;