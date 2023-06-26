import React from "react";

const SentMessage = () => {
    return (
        <div className="flex items-center justify-end gap-2 py-2">
            <div className="chat-message bg-sky-600">
                Yeah, I understand. It'll all be good.
            </div>

            <img className="w-16 h-16 rounded-full"
                src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                alt="Large avatar" 
            />
        </div>
    );
}

export default SentMessage;