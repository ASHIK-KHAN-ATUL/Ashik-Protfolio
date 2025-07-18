import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";




export const  AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsbcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){

            }
            else{
                
            }
            setLoading(false);
        });
        return ()=> unsbcribe();
    } ,[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        googleSign,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;