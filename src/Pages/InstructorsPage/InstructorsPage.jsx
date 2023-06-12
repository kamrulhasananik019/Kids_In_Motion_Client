import React from 'react';
import useAxiosSecure from '../../Components/hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorsPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors');
        return res.data;
    });

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-28 mt-10'>
            {instructors.map((instructor) => (
                <div key={instructor._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={instructor.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name : {instructor.name}</h2>
                        <p>Email : {instructor.email}</p>
                        <p>{instructor.description}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstructorsPage;
