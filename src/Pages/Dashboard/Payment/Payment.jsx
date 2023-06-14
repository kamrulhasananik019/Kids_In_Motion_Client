
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Components/hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['select'],
        queryFn: async () => {
            const res = await axiosSecure.get('/select')
            return res.data
        }
    })

    const newItem = classes?.find(item => item._id === id);


    return (
        <div className="w-full px-40">
            <h2>Payment </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={newItem?.price} item={newItem}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;