import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';

const AdminRoute = ({children}) => {

    const {user, loading, logout} = useContext(AuthContext);
    const [isAdmin, isAdminLoadind] = useAdmin();
    const navigate = useNavigate();

    if(loading || isAdminLoadind){
        return  <div className="flex justify-center items-center h-screen bg-black">
                    <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin shadow-2xl shadow-purple-500/70"></div>
                </div>
    }

    if(user && isAdmin){
        return children;
    }

    if(!isAdmin){
        logout().then(()=>{
            toast.warning('Unauthorized access! You have been logged out.');
        })
        navigate('/')
    }

    return null;
};

export default AdminRoute;