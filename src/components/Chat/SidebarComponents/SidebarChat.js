import React from "react";
import { useContext } from "react";
import { ChatContext } from "../../../ChatContext";

const SidebarChat = (props) => {
  const { userInfo } = props.chatInfo;
  const lastMessageText = props.chatInfo.lastMessage?.lastMessageText;
  const { dispatch } = useContext(ChatContext);

  const { data } = useContext(ChatContext);

  const handleChatSelect = () => {
    //change state of active user in Chat context
    dispatch({ type: "CHANGE_ACTIVE_CHAT", payload: userInfo });
  };

  // visually show active chat in sidebar
  const chatClassName = ` ${
    data.userInfo.userId === userInfo.userId
      ? "bg-blue-500 dark:bg-gray-600"
      : "bg-blue-400 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-gray-600"
  } ease-in-out duration-200 flex items-center 
    gap-2 px-1 py-2 border-b border-b-gray cursor-pointer max-lg:justify-center`;

  return (
    <div className={chatClassName} onClick={handleChatSelect}>
      <img
        className="w-14 h-14 rounded-full"
        src={userInfo.photoURL}
        alt="Large avatar"
      />

      <div className="max-lg:hidden">
        <p className="text-xl font-semibold">{userInfo.displayName}</p>
        {lastMessageText && (
          <p className="text-base">
            {lastMessageText.length < 48
              ? lastMessageText
              : lastMessageText.substring(0, 48) + "..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default SidebarChat;
