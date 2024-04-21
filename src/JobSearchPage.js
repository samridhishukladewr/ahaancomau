import React, { useState, useEffect } from 'react';

function JobSearchPage() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const dummyJobs = [
        { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
        { id: 2, title: 'Data Analyst', description: 'Analyze and interpret complex data sets.' },
        { id: 3, title: 'Product Manager', description: 'Drive product strategy and execution.' },
        { id: 4, title: 'UX Designer', description: 'Design user-friendly interfaces.' },
        { id: 5, title: 'Technical Writer', description: 'Produce high-quality documentation.' },
        { id: 6, title: 'DevOps Engineer', description: 'Work on systems operations and deployment.' },
        { id: 7, title: 'Project Manager', description: 'Manage projects from conception to completion.' },
        { id: 8, title: 'Sales Representative', description: 'Sell products and services to customers.' },
        { id: 9, title: 'Marketing Specialist', description: 'Develop and implement marketing plans.' },
        { id: 10, title: 'Customer Support', description: 'Provide support to customers.' }
    ];

    useEffect(() => {
        setJobs(dummyJobs);
    }, []);

    const handleSearch = () => {
        const filteredJobs = dummyJobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setJobs(filteredJobs);
        setHasSearched(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <h1>Job Search</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for a job"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {hasSearched && jobs.map(job => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default JobSearchPage;
