import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import Google from '../../../assets/icons/google.svg';
import Github from '../../../assets/icons/github.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignIn = () => {
    useTitle('Sign In');
    const { signIn, signInProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // Handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    // Handle Google Sign In
    const handleGoogleSignIn = () => {
        signInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    // Handle Github Sign In
    const handleGithubSignIn = () => {
        signInProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    return (
        <div className='sm:w-[450px] mx-auto my-12'>
            <form onSubmit={handleSubmit} className="card-body mx-3 shadow-2xl rounded-lg bg-base-200">
                <h1 className="text-4xl text-center font-bold">Sign In</h1>
                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                </div>
                {/* Pasword */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    {/* Sign Up Link & Forgot Button */}
                    <label className="label">
                        <Link to='/signup' className="label-text-alt link link-hover">Sign up</Link>
                        <button className="label-text-alt link link-hover">Forgot Password?</button>
                    </label>
                </div>
                {/* Sign In Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign In</button>
                </div>
                {/* Divider */}
                <div className="divider">OR</div>
                {/* Google Github Login */}
                <div className="flex justify-center items-center">
                    <img onClick={handleGoogleSignIn} src={Google} alt="" className='h-12 w-12 mr-2' />
                    <img onClick={handleGithubSignIn} src={Github} alt="" className='h-12 w-12 ml-2' />
                </div>
            </form>
        </div>
    );
};

export default SignIn;