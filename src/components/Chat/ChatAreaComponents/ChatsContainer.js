import React from "react";
import ReceivedMessage from "./ChatsContainerComponents/ReceivedMessage";
import SentMessage from "./ChatsContainerComponents/SentMessage";

const ChatsContainer = () => {
    return (
        <div className="basis-auto grow shrink-0 chat-bg px-4 my-custom-scrollbar">
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />
            <ReceivedMessage />

            <SentMessage />
            <SentMessage />
            <SentMessage />
        </div>
    );
}

export default ChatsContainer;