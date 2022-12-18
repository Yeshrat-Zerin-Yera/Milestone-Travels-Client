import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsSection from '../ServiceDetailsSection/ServiceDetailsSection';
import ServiceReviewSection from '../ServiceReviewSection/ServiceReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='my-12 font-semibold'>
            {/* Service Details Section */}
            <ServiceDetailsSection service={service}></ServiceDetailsSection>
            {/* Service Review Section */}
            <ServiceReviewSection service={service}></ServiceReviewSection>
        </div>
    );
};

export default ServiceDetails;