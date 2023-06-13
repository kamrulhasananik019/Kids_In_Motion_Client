import React from 'react';
import useAuth from '../../Components/hook/useAuth';
import useAxiosSecure from '../../Components/hook/useAxiosSecure';
import Swal from 'sweetalert2';

const AllClassCard = ({ allclass }) => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();


    const handleSelect = () => {
        const { classname, name, seats, _id, price, image, } = allclass;
        const seleted = { classname, name, seats, _id, price, image, user: user?.email }
        axiosSecure.post(`/select`, seleted)
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
    }
    return (
        <div>
            <div key={allclass?._id} className="card card-compact h-96 md:w-96  bg-base-100 shadow-xl">
                <figure>
                    <img src={allclass?.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ">Class Name: {allclass?.classname}</h2>
                    <p className='font-semibold '>Instructors : {allclass?.name}</p>
                    <p>Available seats : {allclass?.seats}</p>
                    <div className='flex px-2'>
                        <p>Price :${allclass?.price}</p>
                        <button onClick={() => handleSelect(allclass._id)} className="btn btn-outline btn-secondary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClassCard;