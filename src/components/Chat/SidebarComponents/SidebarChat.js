import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../../ChatContext";

const SidebarChat = (props) => {
    const { userInfo } = props.chatInfo;
    const { lastMessageText } = props.chatInfo.lastMessage;
    const { dispatch } = useContext(ChatContext);

    const handleChatSelect = () => { //change state of active user in Chat context
        dispatch({type: "CHANGE_ACTIVE_CHAT", payload: userInfo})
    };

    return (
        <div className="bg-blue-400 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-gray-600 ease-in-out duration-200 flex items-center 
            gap-2 px-1 py-2 border-b border-b-gray cursor-pointer" onClick={handleChatSelect}>
                
            <img className="w-14 h-14 rounded-full" 
                src={userInfo.photoURL}
                alt="Large avatar" />


            <div>
                <p className="text-xl font-semibold">{userInfo.displayName}</p>
                <p className="text-base">
                    {   
                        lastMessageText.length < 48 
                        ? lastMessageText 
                        : lastMessageText.substring(0, 48) + "..."
                    }
                </p>
            </div>
        </div>
    );
}

export default SidebarChat;