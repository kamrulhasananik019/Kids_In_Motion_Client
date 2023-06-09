
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Test from "../Pages/Test/Test";
import PrivateRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


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
                path: 'test',
                element: <PrivateRoute><Test></Test></PrivateRoute>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'allusers',
                        element:<AllUsers></AllUsers>
                    }
                ]
            }
        ]
    },
]);