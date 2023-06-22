import React from "react";
import ChatAreaHeader from "./ChatAreaComponents/ChatAreaHeader";

const ChatArea = () => {
    return(
        <div className=" w-[100%] flex flex-col">
            <ChatAreaHeader />
            Chat Area
        </div>
    );

};

export default ChatArea;