import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-full flex justify-center'>
            <FadeLoader color="#36d7b7" />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;