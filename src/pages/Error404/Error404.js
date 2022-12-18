import React from 'react';

const Error404 = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>😢 Oops!</h1>
            <p className='my-6'>Sorry, an unexpected error has occoured.</p>
            <i>Not Found</i>
        </div>
    );
};

export default Error404;