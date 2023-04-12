import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobSingleDetails from './JobSingleDetails/JobSingleDetails';

const AppliedJob = () => {

    const { 
        products, initialCart} = useLoaderData()
    console.log(initialCart)
    return (
        <div>
            {initialCart.map(item => <JobSingleDetails item={item}></JobSingleDetails> )
            }
        </div>
    );
};

export default AppliedJob;