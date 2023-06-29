import React, { useContext } from "react";
import { AppContext } from "../../../../App";

const SentMessage = (props) => {
  const { currentUser } = useContext(AppContext);

  return (
    <div className="flex items-start justify-end gap-2 py-2">
      <div className="chat-message bg-sky-600">{props.msgText}</div>

      <img
        className="w-14 h-14 rounded-full"
        src={currentUser.photoURL}
        alt="Large avatar"
      />
    </div>
  );
};

export default SentMessage;
