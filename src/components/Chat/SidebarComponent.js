import React from "react";
import { Avatar } from 'flowbite-react';
import signOutImg from '../../images/signOut.svg'
import plusImg from '../../images/plusImg.svg'

const SidebarComponent = (props) => {

    const handleLogOut = () => {
        props.logOutCall()
    }

    return(
        <div className="border-r border-r-gray flex flex-col bg-blue-300 text-slate-950 font-nunito">
            <div className=" w-full p-4 flex justify-between items-center border-b border-b-gray">
                <div className="font-bold flex items-center gap-2">
                    <Avatar
                        alt="avatar picture"
                        img="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                        rounded
                    />
                    <p>Chats</p>
                </div>

                <div className="flex gap-4">
                    <button title="Add Chat" className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover">
                        <img className="w-8 h-8 rounded" src={plusImg} alt="signOut"/>
                    </button>

                    <button title="Sign Out" className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover" onClick={handleLogOut}>
                        <img className="w-8 h-8 rounded" src={signOutImg} alt="signOut"/>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default SidebarComponent;