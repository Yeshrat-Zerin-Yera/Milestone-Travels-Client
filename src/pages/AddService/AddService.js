import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const services = useLoaderData();
    const { user } = useContext(AuthContext);
    const [service, setService] = useState({});
    const [price, setPrice] = useState(null);

    const handlePrice = event => {
        event.preventDefault();
        const serviceName = event.target.value;
        for (const service of services) {
            if (serviceName === service?.serviceName) {
                setPrice(service?.price);
                setService(service);
            }
        }
    };

    // Handle User Data Submit
    const handleUserDataSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = service?.serviceName;
        const customer = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
            serviceId: service?._id,
            serviceName,
            serviceImg: service.img,
            price,
            customer,
            email,
            message
        }
        if (service?._id) {
            // Send Data To Backend
            fetch('https://milestone-travels-server.vercel.app/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.acknowledged) {
                        toast.success('Service Added Successfully');
                        form.reset();
                    }
                })
                .catch(error => console.error(error))
        }
        else {
            toast.error('Please Select A Service First.');
        }

    };

    return (
        <form onSubmit={handleUserDataSubmit} className='bg-base-200 rounded-lg font-bold p-12 lg:p-24 my-12 mx-3'>
            <h2 className='text-center text-2xl'>Add Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {/* Service Name */}
                <select onChange={handlePrice} className="select w-full font-bold text-[16px]">
                    <option disabled selected>Select Service</option>
                    {
                        services.map(service => <option key={service?._id} className='font-bold'>{service?.serviceName}</option>)
                    }
                </select>
                {/* Service Price */}
                <input type="text" name='price' defaultValue={price} readOnly placeholder="Price" className="input w-full" />
                {/* User Name */}
                <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input w-full" required />
                {/* Email */}
                <input type="email" name='email' defaultValue={user?.uid ? user?.email : 'Unregistered'} placeholder="Your Email" className="input w-full" readOnly />
            </div>
            {/* Message */}
            <textarea name='message' className="textarea w-full h-40" placeholder="Your Message" maxLength="100"></textarea>
            {/* Submit Button */}
            <div className='flex justify-end'>
                <button className="btn btn-primary text-white mt-6">Add Service</button>
            </div>
        </form>
    );
};

export default AddService;