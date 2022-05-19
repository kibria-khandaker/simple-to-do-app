import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center'>
                <p className='my-5 py-5'><Link className=' text-decoration-none bg-info text-white px-3 py-2 rounded' to='/'>Home</Link></p>
            
        </div>
    );
};

export default Footer;