import React from "react";
import { Tooltip } from "flowbite-react";
import sendImg from '../../../images/sendIcon.svg'

const ChatAreaFooter = () => {
    return (
        <div className="h-[75px] bg-blue-300 p-4 flex gap-2 justify-around items-center light-blue-dark">
            <textarea className=" w-[90%] rounded bg-blue-200 dark:bg-slate-700 border-0 drop-shadow-sm resize-none my-custom-scrollbar 
                hover:bg-blue-100 dark:hover:bg-slate-600 focus:bg-blue-100 dark:focus:bg-slate-600"
                placeholder="Enter your message here...">

            </textarea>

            <Tooltip content="Send Message" placement="top">
                <button className="py-1 px-1 rounded shadow text-xl btn-white btn-white:hover">
                    <img className="w-8 h-8 rounded" src={sendImg} alt="Toggle theme"/>
                </button>
            </Tooltip>
        </div>
    );
}

export default ChatAreaFooter;