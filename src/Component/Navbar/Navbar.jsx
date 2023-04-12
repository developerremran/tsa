import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex my-container items-center justify-between'>
                <h3 className='text-2xl font-extrabold'>Job Hub</h3>
                <ul className='flex'>
                    <li className='mr-4'>toi kor</li>
                    <NavLink to='/applied-jobs' className='mr-4'>Applied Jobs</NavLink>
                    <li>toi kor</li>
                </ul>
                <button>Apply Job</button>
            </div>
    );
};

export default Navbar;