import React, { useContext, useState } from "react";
import { Tooltip } from "flowbite-react";
import sendImg from "../../../images/sendIcon.svg";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { fireDB } from "../../../firebase.config";
import { ChatContext } from "../../../ChatContext";
import uniqid from "uniqid";
import { AppContext } from "../../../App";

const ChatAreaFooter = () => {
  const [newMsg, setNewMsg] = useState("");

  const { currentUser } = useContext(AppContext);
  const { data } = useContext(ChatContext);

  const handleSendMessage = async () => {
    //prevent sending empty msg + sending message when no chat selected
    if (newMsg === "" || data.chatId === "") return;

    try {
      //update messages array btn user chatting in chats collection
      await updateDoc(doc(fireDB, "chats", data.chatId), {
        messages: arrayUnion({
          msgId: uniqid(),
          senderId: currentUser.uid,
          msgDate: Timestamp.now(),
          msgText: newMsg,
        }),
      });

      //update lastMessage + date for currentUser + other user chatting in userChats collection
      await updateDoc(doc(fireDB, "userChats", currentUser.uid), {
        [data.chatId + ".date"]: serverTimestamp(),

        [data.chatId + ".lastMessage"]: {
          lastMessageText: newMsg,
        },
      });

      await updateDoc(doc(fireDB, "userChats", data.userInfo.userId), {
        [data.chatId + ".date"]: serverTimestamp(),

        [data.chatId + ".lastMessage"]: {
          lastMessageText: newMsg,
        },
      });

      setNewMsg("");
    } catch (err) {
      console.error(err);
    }
  };

  const textClassname = `${
    data.chatId === "" ? "cursor-not-allowed" : ""
  } w-[90%] rounded bg-blue-200 dark:bg-slate-700 border-0 drop-shadow-sm 
        resize-none my-custom-scrollbar hover:bg-blue-100 dark:hover:bg-slate-600 focus:bg-blue-100 dark:focus:bg-slate-600`;

  return (
    <div className="h-[75px] bg-blue-300 p-4 flex gap-2 justify-around items-center light-blue-dark">
      <textarea
        disabled={data.chatId === "" ? "disabled" : ""}
        className={textClassname}
        placeholder="Enter your message here..."
        onChange={(e) => setNewMsg(e.target.value)}
        value={newMsg}
      ></textarea>

      <Tooltip content="Send Message" placement="top">
        <button
          className="py-1 px-1 rounded shadow text-xl btn-white btn-white:hover"
          onClick={handleSendMessage}
        >
          <img className="w-8 h-8 rounded" src={sendImg} alt="Toggle theme" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ChatAreaFooter;
