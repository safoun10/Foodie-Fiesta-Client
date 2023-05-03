import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav/TopNav';

const Auth = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;