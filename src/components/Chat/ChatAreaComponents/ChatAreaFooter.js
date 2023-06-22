import React from "react";
import { Tooltip } from "flowbite-react";
import sendImg from '../../../images/sendIcon.svg'

const ChatAreaFooter = () => {
    return (
        <div className="h-[75px] bg-blue-300 w-full p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="w-16 h-16 rounded-full"
                    src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                    alt="Large avatar" />
                <div>
                    <p className="text-2xl font-semibold">John Doe</p>
                </div>
            </div>

            <Tooltip content="Send Message" placement="top">
                <button className="py-1 px-1 rounded shadow text-xl btn-white btn-white:hover">
                    <img className="w-8 h-8 rounded" src={sendImg} alt="Toggle theme"/>
                </button>
            </Tooltip>
        </div>
    );
}

export default ChatAreaFooter;