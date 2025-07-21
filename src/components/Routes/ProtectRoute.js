import React from 'react'
import { useFirebase } from '../context/Firebase'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectRoute() {
const firebase = useFirebase();
return (firebase.isLoggedIn) ? <Outlet/> : <Navigate to={'/signin'}/>;
}

export default ProtectRoute