import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Dark from '../../../Components/hook/Dark/Dark';



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <section className='bg-[--nav-bg] '>
            <div className='md:mx-28'>
                <div className="navbar  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/' >Home</Link>
                                </li>
                                <li>
                                    <Link to='/signup' >Sign Up</Link>
                                </li>
                                <li>
                                    <Link to='/allclasses'>All Classes</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard'>Dashboard</Link>
                                </li>
                                <li>
                                    <Dark></Dark>
                                </li>
                            </ul>
                        </div >
                   <img src="https://i.ibb.co/p2ZXTr4/kids-in-motion-summer-sports-camp-removebg-preview.png" width={50}  alt="" />
                    
                       <p className="btn btn-ghost normal-case md:text-xl ">Kids in Motion</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/' >Home</Link>
                            </li>
                            <li>
                                <Link to='/signup' >Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/allclasses'>All Classes</Link>
                            </li>
                            <li>
                                <Link to='/instructorspage'>Instructors Page</Link>
                            </li>
                          {user ?   <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li> : <></>}
                            <li>
                                <Dark></Dark>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            {
                                user ? <>
                                    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                </> : <>
                                    <Link to='/login' >LogIn</Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NavBar;