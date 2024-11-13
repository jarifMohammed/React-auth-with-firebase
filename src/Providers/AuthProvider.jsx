
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase';
import { useEffect } from 'react';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)

    const [loading , setLoading] = useState(true)

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    setLoading(true)
}


 const signIn = ( email ,password) =>{
    return signInWithEmailAndPassword(auth ,email, password)

 }


 const signInwithgoogle = ()=>{
    return signInWithPopup(auth,googleProvider)
 }


 const signOutUser = () =>{
    return signOut(auth)
 }




  useEffect( () =>{
  const unsubscribe =  onAuthStateChanged(auth , currentUser =>{
        console.log('current use', currentUser)
        setUser(currentUser)
        setLoading(false)
    })
 return () =>{
    unsubscribe()
 }


  } , [])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        signOutUser,
        signInwithgoogle
    }

return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;