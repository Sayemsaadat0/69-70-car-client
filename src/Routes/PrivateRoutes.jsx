import React, { useContext } from 'react';
import { AuthConext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthConext)
    const location = useLocation()



    if(loading){
        return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login"
    state={{from: location}}
    replace></Navigate>
};

export default PrivateRoutes;