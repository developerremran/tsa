import React, { useEffect, useState } from 'react';
import SingleJobCategory from './SingleJobCategory';

const Jobcategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-24 gap-10 my-container justify-between mb-16'>
            {
                jobs.map(job => <SingleJobCategory job={job} key={job.id}></SingleJobCategory>)
            }
        </div>
    )
};

export default Jobcategory;