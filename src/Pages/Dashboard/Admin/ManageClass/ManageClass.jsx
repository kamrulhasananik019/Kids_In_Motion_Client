import React from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Components/hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclass')
        return res.data;
    })


    const handleApproved = (id) => {
        const updateApp = { status: 'approved' };
        axiosSecure
            .patch(`/allclass/${id}`, updateApp)
            .then((response) => {
                if (response.data.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` is approved Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleDenied = (id) => {
        const updateApp = { status: 'denied' };
        axiosSecure
            .patch(`/allclass/${id}`, updateApp)
            .then((response) => {
                if (response.data.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `is  denied Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Class Info</th>
                            <th>Price</th>
                            <th> Available seats</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allclass.map((item, index) => (
                            <tr className='bg-gradient-to-r from-rose-100 to-teal-100' key={item._id}>

                                <th>{index + 1}</th>
                                <td>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">{item.email}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3 gap-5">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" text-xl">{item.classname}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.status}</td>
                                <td >
                                    <div className='flex flex-col gap-3'>
                                        <button className="btn btn-sm btn-outline btn-success" onClick={() => handleApproved(item._id)}>approved</button>
                                        <button className="btn btn-sm btn-outline btn-error" onClick={() => handleDenied(item._id)}>denied</button>
                                    <Link to={`/dashboard/feedback/${item._id}`}>
                                    <button className="btn btn-sm btn-outline btn-warning" >feedback</button></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
           
            </div>


        </section>
    );
};

export default ManageClass;