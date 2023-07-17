import React, { useContext, useEffect, useRef, useState } from "react";
import ReceivedMessage from "./ChatsContainerComponents/ReceivedMessage";
import SentMessage from "./ChatsContainerComponents/SentMessage";
import { doc, onSnapshot } from "firebase/firestore";
import { fireDB } from "../../../firebase.config";
import { ChatContext } from "../../../ChatContext";
import { AppContext } from "../../../App";

const ChatsContainer = () => {
  //reference to scroll automatically to bottom of messages whenever the messages change
  const messageEndRef = useRef(null);
  const { currentUser } = useContext(AppContext);
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //load active chat (chatId from state in Chat Context) messages
    if (data.chatId === "") return; //prevent empty id before choosing chat

    const fetchMessages = () => {
      const unsub = onSnapshot(doc(fireDB, "chats", data.chatId), (doc) => {
        //if doc exists then set messages
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => unsub();
    };

    fetchMessages();
  }, [data.chatId]);

  useEffect(() => {
    //scroll to bottom of messages on new messages arrival
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="h-[--chatsContainerHeight] px-4 overflow-auto my-custom-scrollbar 
            bg-[image:var(--chatBg)] dark:bg-[image:var(--darkChatBg)] bg-no-repeat bg-cover "
    >
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full w-full">
          <p className="text-3xl dark:text-slate-200 font-semibold max-sm:text-base">
            Select a chat to start chatting
          </p>
        </div>
      )}

      {messages.length > 0 &&
        messages.map((msg) => {
          return msg.senderId === currentUser.uid ? (
            <SentMessage key={msg.msgId} msgText={msg.msgText} />
          ) : (
            <ReceivedMessage key={msg.msgId} msgText={msg.msgText} />
          );
        })}

      {/* dummy elem for automatic scrolling to bottom  */}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatsContainer;
