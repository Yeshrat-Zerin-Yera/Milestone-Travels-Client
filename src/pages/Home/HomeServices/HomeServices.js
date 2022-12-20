import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h2 className='text-2xl text-white text-center font-bold mb-12 mt-24'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 my-12 mx-3'>
                {
                    services.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services' className='btn btn-secondary'>See More</Link>
            </div>
        </div>
    );
};

export default HomeServices;