import React, { useEffect } from 'react'
import Home from './components/Home';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Profile from './components/Profile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { useAuthContext } from './contextapi/authContext/authContext.js';

function Elements() {

  const { isLogin,  } = useAuthContext();

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={ <App/>} >
                <Route path='' element={isLogin ? <Home /> : <Login/>} />
                <Route path='profile' element={<Profile />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        )
    )


    return (
        <RouterProvider router={router} />
    )
}

export default Elements
