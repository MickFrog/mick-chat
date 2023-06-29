import React, { useContext } from "react";
import { ChatContext } from "../../../../ChatContext";

const ReceivedMessage = (props) => {
  const { data } = useContext(ChatContext);

  return (
    <div className="flex items-start gap-2 py-2">
      <img
        className="w-14 h-14 rounded-full"
        src={data.userInfo.photoURL}
        alt="Large avatar"
      />

      <div className="chat-message bg-blue-800">{props.msgText}</div>
    </div>
  );
};

export default ReceivedMessage;
