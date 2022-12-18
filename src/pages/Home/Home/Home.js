import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div className='container mx-auto my-12'>
            <Carousel></Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;