import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const axiosSecure = axios.create({
    baseURL: 'https://ashik-profolio-server.vercel.app'
})

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access_token');
        console.log("request stoped by interceptor");
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response.status;
        console.log(('Status Error In The Interceptor', status));
        if(status === 4001 || status === 403){
            await logout();
            toast.error('You Havent Access So You Are Logged Out');
            navigate('/');
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;