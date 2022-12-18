import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    useTitle('Services');
    const services = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 my-12 mx-3'>
            {
                services.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;