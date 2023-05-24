import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useAuthStatus } from './hooks/useAuthStatus';

function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    if(checkingStatus)
        return <h1>Loading...</h1>
    return (
        <>
          {loggedIn?<Outlet/>: <Navigate to={"/profile"}/>}
        </>
    )
}

export default PrivateRoute