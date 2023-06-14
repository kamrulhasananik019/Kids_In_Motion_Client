import React from 'react';
import useAxiosSecure from '../../../../Components/hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Components/hook/useAuth';

const MyClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get(`/myclass/${user.email}`)
        return res.data;
    })

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
                            <th>seats</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {allclass.map((item, index) => (
                            <tr key={item._id}>

                                <th>{index + 1}</th>
                                <td>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">{item.email}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.classname}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.status}</td>
                                <td>{item?.feedback}</td>
                                <button className="btn btn-outline btn-secondary">Update </button>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>


        </section>
    );
};

export default MyClasses;