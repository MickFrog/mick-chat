import React from "react";
import ChatAreaHeader from "./ChatAreaComponents/ChatAreaHeader";
import ChatsContainer from "./ChatAreaComponents/ChatsContainer";
import ChatAreaFooter from "./ChatAreaComponents/ChatAreaFooter";

const ChatArea = () => {
  return (
    <div className="flex flex-col">
      <ChatAreaHeader />
      <ChatsContainer />
      <ChatAreaFooter />
    </div>
  );
};

export default ChatArea;
