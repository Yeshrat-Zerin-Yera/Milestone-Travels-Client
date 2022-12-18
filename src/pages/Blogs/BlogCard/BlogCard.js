import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, img, title, description } = blog;

    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            {/* Blog Image */}
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} style={{ objectFit: 'cover' }} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            {/* Blog Details */}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <div className="card-actions justify-between items-center">
                    <Link to={`/blogs/${_id}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;