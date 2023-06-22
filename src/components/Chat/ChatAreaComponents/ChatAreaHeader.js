import React from "react";
import moonIcon from '../../../images/moonIcon.svg'
import { Tooltip } from "flowbite-react";

const ChatAreaHeader = () => {
    return (
        <div className="sticky h-[75px] bg-blue-300 top-0 w-full p-4 flex justify-between items-center border-b border-b-gray">
            <div className="flex items-center gap-4">
                <img className="w-16 h-16 rounded-full"
                    src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                    alt="Large avatar" />
                <div>
                    <p className="text-2xl font-semibold">John Doe</p>
                </div>
            </div>

            <Tooltip content="Toggle Theme" placement="left">
                <button title="Add Chat" className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover">
                    <img className="w-8 h-8 rounded" src={moonIcon} alt="Toggle theme"/>
                </button>
            </Tooltip>
        </div>
    );
}

export default ChatAreaHeader;