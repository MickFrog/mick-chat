import React from "react";

const SidebarChat = (props) => {
    const { userInfo } = props.chatInfo;

    const tempLastMsg = "Yo Kalooli, I meant to check on you yesterday but sth unfortunate happened!";
    return (
        <div className="bg-blue-400 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-gray-600 ease-in-out duration-200 flex items-center 
            gap-2 px-1 py-2 border-b border-b-gray cursor-pointer">
                
            <img className="w-14 h-14 rounded-full" 
                src={userInfo.photoURL}
                alt="Large avatar" />


            <div>
                <p className="text-xl font-semibold">{userInfo.displayName}</p>
                <p className="text-base">{tempLastMsg.substring(0, 48)}...</p>
            </div>
        </div>
    );
}

export default SidebarChat;