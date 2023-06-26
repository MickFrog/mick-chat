import React, { useContext, useState } from "react";
import { Avatar, Tooltip } from 'flowbite-react';
import signOutImg from '../../../images/signOut.svg'
import plusImg from '../../../images/plusImg.svg'
import { AppContext } from "../../../App";
import { auth } from "../../../firebase.config";
import SearchModal from "./SearchModal";

const SidebarHeader = () => {
    const { logOutUser } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(undefined);      //state to control display of search user modal

    const handleLogOut = () => {
        logOutUser();
    }

    return(
        <div className="sticky h-[75px] bg-inherit text-slate-950 light-blue-dark top-0 w-full p-4 flex justify-between items-center border-b border-b-gray">
            <div className="font-bold flex items-center gap-2">
                <Avatar
                    alt="avatar picture"
                    img={auth.currentUser?.photoURL}
                    rounded
                />
                <p>Chats</p>
            </div>

            <div className="flex gap-4">
                <Tooltip content="Add Chat" placement="bottom">
                    <button className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover" onClick={() => setOpenModal('dismissible')}>
                        <img className="w-8 h-8 rounded" src={plusImg} alt="addChat"/>
                    </button>
                </Tooltip>

                <Tooltip content="Sign Out" placement="bottom">
                    <button className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover" onClick={handleLogOut}>
                        <img className="w-8 h-8 rounded" src={signOutImg} alt="signOut"/>
                    </button>
                </Tooltip>
            </div>

            {/* Popup modal for searching user  */}
            <SearchModal openModal={openModal} onClose={() => setOpenModal(undefined)}/>
        </div>
    );
}

export default SidebarHeader;