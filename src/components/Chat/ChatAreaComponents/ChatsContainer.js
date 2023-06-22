import React, { useEffect, useRef } from "react";
import ReceivedMessage from "./ChatsContainerComponents/ReceivedMessage";
import SentMessage from "./ChatsContainerComponents/SentMessage";

const ChatsContainer = () => {
    //reference to scroll automatically to bottom of messages whenever the messages change
    const messageEndRef = useRef(null);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView();
    }) //messages array dependency supposed to be here

    return (
        <div className="h-[--chatsContainerHeight] chat-bg px-4 overflow-auto my-custom-scrollbar">
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

            {/* dummy elem for automatic scrolling to bottom  */}
            <div ref={messageEndRef}></div>
        </div>
    );
}

export default ChatsContainer;