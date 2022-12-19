import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    useTitle('Services');
    const [loading, setLoading] = useState(true);
    const services = useLoaderData();

    if (loading) {
        return <div className='w-full flex justify-center'>
            <ClipLoader color="#36d7b7" />
            {
                services && setLoading(false)
            }
        </div>
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 my-12 mx-3'>
            {
                services.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;