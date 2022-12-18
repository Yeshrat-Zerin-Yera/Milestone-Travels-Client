import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-200 rounded-lg py-6">
            <div className="navbar-start">
                {/* Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* Dropdown Links */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        {
                            user?.uid ? <>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                                <li><Link to='/addservice'>Add Service</Link></li>
                            </> : undefined
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                {/* Name */}
                <Link to='/' className="btn btn-ghost normal-case text-xl">Milestone Travels</Link>
            </div>
            {/* Middle Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    {
                        user?.uid ? <>
                            <li><Link to='/myreviews'>My Reviews</Link></li>
                            <li><Link to='/addservice'>Add Service</Link></li>
                        </> : undefined
                    }
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            {/* Right Links */}
            <div className="navbar-end">
                {
                    user?.uid ? <Link to='/signin' onClick={logOut} className='btn btn-primary'>Sign Out</Link>
                        : <Link to='/signin' className='btn btn-primary mr-3'>Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;