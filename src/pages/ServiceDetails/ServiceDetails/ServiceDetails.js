import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsSection from '../ServiceDetailsSection/ServiceDetailsSection';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='my-12 font-semibold'>
            {/* Service Details Section */}
            <ServiceDetailsSection service={service}></ServiceDetailsSection>
        </div>
    );
};

export default ServiceDetails;