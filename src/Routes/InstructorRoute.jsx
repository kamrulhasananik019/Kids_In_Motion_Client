import React from 'react';
import useAuth from '../Components/hook/useAuth';
import useInstructor from '../Components/hook/useInstructor';
import { useLocation } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;