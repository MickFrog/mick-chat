import React, { useContext, useEffect, useState } from "react";
import moonIcon from '../../../images/moonIcon.svg';
import sunIcon from '../../../images/sunIcon.svg';
import { Tooltip } from "flowbite-react";
import { AppContext } from "../../../App";

const ChatAreaHeader = () => {
    const [ themeIcon, setThemeIcon ] = useState(null);             //state to adjust depending on current theme
    const { theme, handleThemeSwitch } = useContext(AppContext);    //get values from app context

    useEffect(() => { //change theme icon depending on theme
        if(theme === 'dark') {
            setThemeIcon(sunIcon);
            return;
          }
          
          setThemeIcon(moonIcon);
    }, [theme])

    return (
        <div className="sticky top-0 h-[75px] bg-blue-300 p-4 light-blue-dark flex justify-between items-center border-b border-b-gray">
            <div className="flex items-center gap-4">
                <img className="w-16 h-16 rounded-full"
                    src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1057706089.1669122497&semt=sph"
                    alt="Large avatar" />
                <div>
                    <p className="text-2xl font-semibold">John Doe</p>
                </div>
            </div>

            <Tooltip content="Toggle Theme" placement="left">
                <button className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover" onClick={handleThemeSwitch}>
                    <img className="w-8 h-8 rounded" src={themeIcon} alt="Toggle theme"/>
                </button>
            </Tooltip>
        </div>
    );
}

export default ChatAreaHeader;