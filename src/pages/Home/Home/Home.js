import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AddedServices from '../AddedServices/AddedServices';
import Carousel from '../Carousel/Carousel';
import Services from '../HomeServices/HomeServices';

const Home = () => {
    useTitle('Home');

    return (
        <div className='container mx-auto my-12'>
            <Carousel></Carousel>
            <Services></Services>
            <AddedServices></AddedServices>
        </div>
    );
};

export default Home;