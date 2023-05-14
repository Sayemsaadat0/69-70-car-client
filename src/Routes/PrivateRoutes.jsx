import React, { useContext } from 'react';
import { AuthConext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthConext)
    if(loading){
        return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;