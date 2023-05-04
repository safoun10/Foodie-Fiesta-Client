import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
			<div style={{display:"flex" , minHeight : "100vh" , justifyContent : "center" , alignItems : "center"}}>
				<InfinitySpin width="800" color="#000000a8" />
			</div>
		);
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;