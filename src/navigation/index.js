import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ForgetPassword, Home, Login, Signup } from '../screens';
// import { PrivateRoute } from '../components/privateRoute';

const RootNavigation = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password' element={<ForgetPassword />} />

        </Routes>
    )
}

export default RootNavigation;

