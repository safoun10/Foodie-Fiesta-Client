import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='my-5 mx-5 display-1'>Loading ..... <hr /> please wait a couple of seconds</div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;