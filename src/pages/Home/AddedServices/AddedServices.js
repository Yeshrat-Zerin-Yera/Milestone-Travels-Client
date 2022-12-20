import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddedServices = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://milestone-travels-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    return (
        <div className='mb-12 mt-24 mx-3'>
            <h2 className='text-2xl font-bold text-center mb-12 text-white'>Added
                Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
                {
                    orders.map(order => <div key={order?._id} className="shadow-xl p-6 rounded-lg font-semibold text-white" style={{ backgroundImage: `url(${order.serviceImg})`, backgroundRepeat: "no-repeat", textShadow: '4px 4px 8px #000000', backgroundSize: 'cover' }}>
                        <h2>Service: {order?.serviceName}</h2>
                        <p>Price: {order?.price}$</p>
                        {
                            order?.message ? <p className='overflow-clip break-words'>{order?.message}</p> : <p className='text-slate-600'><i>No Message</i></p>
                        }
                    </div>)
                }
            </div>
        </div >
    );
};

export default AddedServices;