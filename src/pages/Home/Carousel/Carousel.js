import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
    const slideInfo = [
        { id: 1, img: 'https://i.ibb.co/31hMD7K/slide-1.jpg' },
        { id: 2, img: 'https://i.ibb.co/fYYVv2D/slide-2.jpg' },
        { id: 3, img: 'https://i.ibb.co/M7c4kJM/slide-3.jpg' },
        { id: 4, img: 'https://i.ibb.co/kqLrBJh/slide-4.jpg' }
    ]

    return (
        <div className='relative'>
            {/* Carousel Image */}
            <div className="carousel w-full rounded-lg relative">
                {
                    slideInfo.map(slide => <div key={slide?.id} id={`item${slide?.id}`} className="carousel-item w-full slide">
                        <img src={slide?.img} alt='' className="w-full" />
                    </div>)
                }
            </div>
            {/* Carousel Details */}
            <div className='absolute transform -translate-y-1/2 left-5 right-5 top-1/3 text-center'>
                <h1 className='text-2xl md:text-5xl text-white mb-6 font-bold'>Milestone Travels</h1>
                <p className='lg:text-2xl text-white mb-6 hidden md:block'>Milestone Travels Provides Excellent Solutions to You.</p>
                {/* Buttons */}
                <Link to='/services' className="btn btn-secondary mr-3">Services</Link>
            </div >
            {/* Carousel Button */}
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    slideInfo.map(slide => <a key={slide?.id} href={`#item${slide?.id}`}>
                        <img src={slide?.img} alt="" className='h-12 w-12 rounded-lg' />
                    </a>)
                }
            </div>
        </div>
    );
};

export default Carousel;