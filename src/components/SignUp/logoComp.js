import React from 'react';
import mickChatLogo from '../../images/logoMickChat.svg';

const  LogoComp = () => {
    return (  
        <div className='flex gap-2 items-center font-nunito'>
            <img className='h-12 w-12' src={mickChatLogo} alt="MickChat" />

            <div className='font-semibold text-3xl' >MickChat</div>
        </div>
    );
}

export default LogoComp;