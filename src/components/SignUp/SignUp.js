import React from 'react';
import LogoComp from './logoComp';

const  SignUp = () => {
    return ( 
        <div className=' bg-blue-400 h-screen flex flex-col items-center pt-[15%]'>
            <div className='flex flex-col gap-3 items-center bg-blue-600 rounded p-10'>
                <LogoComp />
                <button className='btn btn-blue'>
                    Sign In With Google
                </button>
            </div>
        </div> 
    );
}

export default SignUp;