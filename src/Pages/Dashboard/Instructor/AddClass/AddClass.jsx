import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Components/hook/useAuth';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Components/hook/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, seats, classname, email } = data;
                    const addclass = { name, price: parseFloat(price), seats: parseFloat(seats), classname, email, image: imgURL , status: 'pending'}
                    axiosSecure.post('/addclass', addclass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }
            })

    };


    return (
        <div className="w-full px-10">
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex my-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name</span>
                            </label>
                            <input type="text" value={user?.displayName}
                                {...register("name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} value={user?.email} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex my-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Available seats
                                </span>
                            </label>
                            <input type="text" placeholder='Available seats'
                                {...register("seats", { required: true })}
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input type="name" {...register("classname", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;