
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Components/hook/useAdmin';
import useInstructor from '../Components/hook/useInstructor';
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'

// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const [isAdmin] = useAdmin();
const [isInstructor]=useInstructor()
    return (
        <section>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                            </> : <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            isInstructor ? <>
                                <li><NavLink to="/dashboard/addclass"><AiOutlineVideoCameraAdd></AiOutlineVideoCameraAdd>Add Class</NavLink></li>
                            </> : <>

                            </>
                        }



                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;