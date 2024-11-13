import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loading} = useContext(AuthContext)

  
if(loading){
 return "wait please"
}



if(user){
    return children
}
 
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;