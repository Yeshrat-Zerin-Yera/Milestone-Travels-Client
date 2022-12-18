import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    useTitle('Blogs');
    const blogs = useLoaderData();
    console.log(blogs?.id);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 my-12 mx-3'>
            {
                blogs.map(blog => <BlogCard key={blog?._id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blogs;