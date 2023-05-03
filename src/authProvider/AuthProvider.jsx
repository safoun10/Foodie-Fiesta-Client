import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext({});

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const user = {name : "wow wow wow"}

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const authInfo = {user , createUser , loginUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;