import React from 'react';

const Show = ({job}) => {
    console.log(job);
    return (
        <div>
            <p>{job.title} </p>
        </div>
    );
};

export default Show;