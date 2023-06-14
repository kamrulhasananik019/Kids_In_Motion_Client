import React from 'react';
import useAuth from '../../../../Components/hook/useAuth';
import useAxiosSecure from '../../../../Components/hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link, Outlet } from 'react-router-dom';
import Pays from './Pays';

const SelectedClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: select = [], refetch } = useQuery(['select'], async () => {
        const res = await axiosSecure.get(`/select/${user.email}`)
        return res.data;
    })


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/select/${id}`, {
                    method: 'DELETE'
                })
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'

                            )
                            refetch()
                        }
                    })
            }
        })

    }


    return (
        <section>
            <Outlet></Outlet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instructor Name</th>
                            <th>Class Info</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {select.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
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
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.classname}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>

                                <td>
                                    <Pays item={item}> </Pays>

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-warning">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SelectedClasses;
