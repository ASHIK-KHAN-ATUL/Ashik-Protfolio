import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { SiGoogle } from 'react-icons/si';
import { IoArrowBack } from 'react-icons/io5';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const LoginWithGoogle = () => {

    const {googleSign, loading, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSign()
        .then((res) => {

            const user = res.user;
            const userInfo ={
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                lastLoginAt: new Date().toISOString(),
                role: 'user', 
            }

            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId || res.data.message === 'user already exists' ){
                    toast.success('✅ Login successful!');
                    navigate('/');
                    console.log(res)
                }
            })
        })
        .catch((error) => {
            console.error('❌ Login error:', error);
        });
    };

    return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100/5 to-purple-100/5 px-10">

      <div className="bg-gradient-to-br from-sky-500/30 to-purple-600/30 rounded-xl shadow-lg  min-h-[350px] max-w-2xl w-full text-center border border-y-sky-400  border-x-purple-400 relative p-10 flex flex-col justify-between">

        <div onClick={()=>navigate('/')} className='absolute top-1 left-1 border-2 rounded-full border-sky-400 p-2  cursor-pointer hover:scale-90 duration-500'>
            <IoArrowBack  className="text-md  text-purple-500" />
        </div>
        <h1 className="text-2xl font-bold ">Welcome to Ashik’s Portfolio</h1>
        <p className="mt-2 ">
          Log in to unlock more features, save your favorite projects, and connect with me easily.
        </p>

        <div className="mt-6">
            <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center justify-center gap-3 w-full px-4 py-2 border border-x-sky-400  border-y-purple-400 rounded shadow hover:scale-90 cursor-pointer duration-500 disabled:opacity-50"
            >
            <SiGoogle className="w-5 h-5 text-red-500" />
            <span>{loading ? 'Connect in...' : 'Connect with Google'}</span>
            </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          By signing in, you agree to our <a  className="text-blue-600">Terms</a> & <a className="text-blue-600">Privacy Policy</a>.
        </p>
      </div>

    </div>
    );
};

export default LoginWithGoogle;