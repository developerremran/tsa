import React from 'react';

const JobSingleDetails = ({ item }) => {
    console.log(item);
    const { image, title, company_name, job_time, location, salary } = item
    return (
        <div>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <h4>{company_name}</h4>
                    <button className='my-btn'>{job_time}</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default JobSingleDetails;