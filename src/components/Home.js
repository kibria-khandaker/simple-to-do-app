import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';

const Home = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='container py-5 my-5 text-center'>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h2 className='mt-5 text-info fw-bold'> Welcome To Simple To Do App </h2>
                    <Link className='d-inline-block my-5 text-decoration-none border-0 px-4 py-3 rounded fw-light fs-3 bg-info text-white' to='/todolist'>
                        Add Your Task
                    </Link>
                    <div>
                        {
                            user
                                ?
                                <Button className='mx-auto' onClick={handleSignOut}>
                                    Sign Out
                                </Button>
                                :
                                <Login></Login>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;