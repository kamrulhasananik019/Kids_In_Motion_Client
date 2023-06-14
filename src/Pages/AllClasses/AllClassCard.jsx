import React, { useState } from 'react';
import useAuth from '../../Components/hook/useAuth';
import useAxiosSecure from '../../Components/hook/useAxiosSecure';
import Swal from 'sweetalert2';
// import useAdmin from '../../Components/hook/useAdmin';


const AllClassCard = ({ allclass }) => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
//    const{isAdmin}=useAdmin()
//    console.log(isAdmin);
// Initialize dis based on seats value

    const handleSelect = () => {
        const { classname, name, seats, price, image } = allclass;
        const selected = { classname, name, seats, price, image, user: user?.email };

        axiosSecure
            .post(`/select`, selected)
            .then((response) => {
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `is denied Now!`,
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
        <div>
            <div key={allclass?._id} className="card card-compact h-96 md:w-96 bg-base-100  shadow-xl">
                <figure>
                    <img src={ allclass?.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {allclass?.classname}</h2>
                    <p className="font-semibold">Instructors: {allclass?.name}</p>
                    <p>Available seats: {allclass?.seats}</p>
                    <div className="flex px-2">
                        <p>Price: ${allclass?.price}</p>
                        <button
                            disabled= {allclass.seats === 0} // Update disabled state based on dis value
                            onClick={() => handleSelect(allclass._id)}
                            className="btn btn-outline btn-secondary"
                        >
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;
