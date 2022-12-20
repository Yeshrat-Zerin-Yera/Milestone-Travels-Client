import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AddedServices from '../AddedServices/AddedServices';
import BookNow from '../BookNow/BookNow';
import Carousel from '../Carousel/Carousel';
import FAQ from '../FAQ/FAQ';
import Services from '../HomeServices/HomeServices';

const Home = () => {
    useTitle('Home');

    return (
        <div className='container mx-auto my-12'>
            <Carousel></Carousel>
            <Services></Services>
            <AddedServices></AddedServices>
            <FAQ></FAQ>
            <BookNow></BookNow>
        </div>
    );
};

export default Home;