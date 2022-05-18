import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container py-5 my-5 text-center'>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h2 className='mt-5 text-info fw-bold'> Welcome To Simple To Do List</h2>
                    <Link className='d-inline-block my-5 text-decoration-none border-0 px-4 py-3 rounded fw-light fs-3 bg-info text-white' to='/todolist'>
                        Add Your Task
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;