import React, { useContext } from "react";
import { Avatar, Tooltip } from 'flowbite-react';
import signOutImg from '../../../images/signOut.svg'
import plusImg from '../../../images/plusImg.svg'
import { AppContext } from "../../../App";

const SidebarHeader = () => {
    const logOustUser = useContext(AppContext)

    const handleLogOut = () => {
        logOustUser();
    }

    return(
        <div className="sticky h-[75px] bg-blue-300 top-0 w-full p-4 flex justify-between items-center border-b border-b-gray">
            <div className="font-bold flex items-center gap-2">
                <Avatar
                    alt="avatar picture"
                    img="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                    rounded
                />
                <p>Chats</p>
            </div>

            <div className="flex gap-4">
                <Tooltip content="Add Chat" placement="bottom">
                    <button className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover">
                        <img className="w-8 h-8 rounded" src={plusImg} alt="signOut"/>
                    </button>
                </Tooltip>

                <Tooltip content="Sign Out" placement="bottom">
                    <button title="Sign Out" className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover" onClick={handleLogOut}>
                        <img className="w-8 h-8 rounded" src={signOutImg} alt="signOut"/>
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}

export default SidebarHeader;