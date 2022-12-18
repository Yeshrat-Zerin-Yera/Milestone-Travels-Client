import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blog = useLoaderData();
    const { title, img, description } = blog;

    return (
        <div className='my-12 font-semibold'>
            <div className='flex flex-col lg:flex-row mx-3'>
                {/* Image */}
                <div className='md:mr-6 lg:w-1/2'>
                    <img src={img} alt="" className='rounded-lg mb-6 w-full' />
                </div>
                {/* Details */}
                <div className='lg:w-1/2'>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='my-6'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;