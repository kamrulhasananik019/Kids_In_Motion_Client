
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import PrivateRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";


import AdminRoute from "./AdminRoute";

import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import SelectedClassess from "../Pages/Dashboard/Student/SelectedClassess/SelectedClassess";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Feedback from "../Pages/Dashboard/Admin/ManageClass/Feedback/Feedback";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'instructorspage',
                element: <InstructorsPage></InstructorsPage>
            }
            ,
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: 'allusers',
                        element: <AllUsers></AllUsers>
                    },
                    {
                        path: 'addclass',
                        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
                    },
                    {
                        path: 'manageclass',
                        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
                    },
                    {
                        path: 'myclasses',
                        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
                    }
                    , {
                        path: 'selectedClasses',
                        element: <PrivateRoute><SelectedClassess></SelectedClassess></PrivateRoute>,   
                    },
                    {
                        path: 'payment/:id',
                        element: <Payment></Payment>
                    },{
                        path:'feedback/:id',
                     element: <AdminRoute><Feedback></Feedback></AdminRoute>
                    }

                ]
            }
        ]
    },
]);