import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from './../firebase.init';
import Loading from './Loading';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className=' text-danger'>Error: {error?.message} </p>
    }

    if (user) {
       navigate(from, { replace: true });
    }

    return (
        <div className=' text-center'>
            <h4 className=' mt-5 mb-3 text-info fw-light'> Login With Simple To Do App </h4>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary my-2 text-white mx-auto d-block'>
                <span className='px-2'> Login Google Account </span>
            </button>

        </div>
    );
};

export default Login;