import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Components/hook/useAxiosSecure";
import Swal from "sweetalert2";


const Feedback = () => {
    const { id } = useParams();
    console.log(id);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const updateFeedback = { feedback: text };

        axiosSecure
            .patch(`/allclass/${ id }`, updateFeedback)
            .then((response) => {
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'feedback updated!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/dashboard/manageclass')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-control w-full px-40">
                <label className="label">
                    <span className="label-text">Feedback</span>
                </label>
                <textarea name='text' className="textarea textarea-bordered h-40" placeholder="Feedback"></textarea>
                <input type="submit" value="Add Feedback" className="btn btn-secondary mt-6" />
            </form>
        </>

    );
};

export default Feedback;