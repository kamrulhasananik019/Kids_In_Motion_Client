import React from 'react';
import { Link } from 'react-router-dom';


const Pays = ({ item }) => {

    return (
        <div>
            <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-outline btn-info">Pay</button></Link>
        </div>
    );
};

export default Pays;