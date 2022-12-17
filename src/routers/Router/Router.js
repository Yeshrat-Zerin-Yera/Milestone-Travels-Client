import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import Home from '../../pages/Home/Home/Home';
import MyReviews from '../../pages/MyReviews/MyReviews/MyReviews';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Services from '../../pages/Services/Services/Services';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
]);

export default router;