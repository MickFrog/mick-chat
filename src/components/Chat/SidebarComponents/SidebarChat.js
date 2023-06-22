import React from "react";

const SidebarChat = () => {
    const tempLastMsg = "Yo Kalooli, I meant to check on you yesterday but sth unfortunate happened!";
    return (
        <div className="rounded bg-blue-400 hover:bg-blue-500 ease-in-out duration-200 flex items-center gap-1 px-1 py-2 border-b 
            border-b-gray cursor-pointer">
                
            <img className="w-16 h-16 rounded-full" 
                src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph" 
                alt="Large avatar" />


            <div>
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-base">{tempLastMsg.substring(0, 48)}...</p>
            </div>
        </div>
    );
}

export default SidebarChat;