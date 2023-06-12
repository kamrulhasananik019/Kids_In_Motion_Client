import React from 'react';
import useAxiosSecure from '../../Components/hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AllClassCard from './AllClassCard';

const AllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclass');
        return res.data;
    });

    const approvedClasses = classes.filter((item) => item.status === 'approved');


   
    return (
        <div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 md:mx-20 mt-10'>
                {approvedClasses.map((allclass) => <AllClassCard allclass={allclass} key={allclass._id}></AllClassCard> )}
            </div>
        </div>
    );
};

export default AllClasses;
