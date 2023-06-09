import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Components/hook/useAuth';


const AddClass = () => {
    const { user } = useAuth();
    console.log(user);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

    };


    return (
        <div className="w-full px-10">
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  className="flex my-4">
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
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Dessert</option>
                                <option>Desi</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
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