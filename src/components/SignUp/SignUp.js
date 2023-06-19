import React, { useEffect, useRef } from 'react';
import { auth, googleProvider } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import LogoComp from './logoComp';

const  SignUp = () => {
    //currently logged in user
    const user = useRef(null);

    const navigateController = useNavigate();

    const signInUser = async () => {
        try{
            //navigate to chat page on successful login
            await signInWithPopup(auth, googleProvider);
            navigateController('/chat');
        } catch(err) {
            console.error(err);
            alert('Failed to sign in');
        }
    }

    useEffect(() => {
        //update user on first render
        user.current = auth.currentUser;
    })

    return ( 
        <div className=' bg-blue-400 h-screen flex flex-col items-center pt-[15%]'>

            {user.current && <Navigate to='/chat'/>}

            <div className='flex flex-col gap-3 items-center bg-blue-600 rounded p-10'>
                <LogoComp />

                <button className='btn btn-blue' onClick={signInUser}>
                    Sign In With Google
                </button>
            </div>
        </div> 
    );
}

export default SignUp;