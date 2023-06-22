import React from "react";

const ReceivedMessage = () => {
    return (
        <div className="flex items-start gap-2 py-2">
            <img className="w-16 h-16 rounded-full"
                src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                alt="Large avatar" 
            />

            <div className="chat-message bg-blue-500">
                Yo Kalooli, I meant to check on you yesterday but I also don't know what happened things just turned out 
                to be bad. I guess we shall meet on another special day and complete the talk.
            </div>
        </div>
    );
}

export default ReceivedMessage;