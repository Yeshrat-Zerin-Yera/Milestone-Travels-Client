import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import Google from '../../../assets/icons/google.svg';
import Github from '../../../assets/icons/github.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ClipLoader from 'react-spinners/ClipLoader';

const SignUp = () => {
    useTitle('Sign Up');
    const { createUser, updateUserProfile, signInProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [loading, setLoading] = useState(false);

    // Handle Submit
    const handleSubmit = event => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                console.error(error);
                setLoading(false);
            })
    };

    // Handle Google Sign Up
    const handleGoogleSignUp = () => {
        setLoading(true);
        signInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            })
    };

    // Handle Github Sign Up
    const handleGithubSignUp = () => {
        setLoading(true);
        signInProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            })
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        console.log(profile);
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    if (loading) {
        return <div className='w-full flex justify-center'>
            <ClipLoader color="#36d7b7" />
        </div>
    }

    return (
        <div className="sm:w-[500px] mx-auto my-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="card-body mx-3 shadow-2xl rounded-lg bg-base-200">
                <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                {/* Photo Upload */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                </div>
                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                </div>
                {/* Password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    {/* Login Link */}
                    <label className="label">
                        <Link to='/signin' className="label-text-alt link link-hover">Already have an account? Login.</Link>
                    </label>
                </div>
                {/* Sign Up Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                {/* Divider */}
                <div className="divider">OR</div>
                {/* Google Github Sign Up */}
                <div className="flex justify-center items-center">
                    <img onClick={handleGoogleSignUp} src={Google} alt="" className='h-12 w-12 mr-2' />
                    <img onClick={handleGithubSignUp} src={Github} alt="" className='h-12 w-12 ml-2' />
                </div>
            </form>
        </div>
    );
};

export default SignUp;