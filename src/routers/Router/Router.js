import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import BlogDetails from '../../pages/Blogs/BlogDetails/BlogDetails';
import Blogs from '../../pages/Blogs/Blogs/Blogs';
import Error404 from '../../pages/Error404/Error404';
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
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '*',
                element: <Error404></Error404>
            },
        ]
    }
]);

export default router;