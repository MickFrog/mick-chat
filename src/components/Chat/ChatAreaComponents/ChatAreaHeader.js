import React, { useContext, useEffect, useState } from "react";
import moonIcon from "../../../images/moonIcon.svg";
import sunIcon from "../../../images/sunIcon.svg";
import { Tooltip } from "flowbite-react";
import { AppContext } from "../../../App";
import { ChatContext } from "../../../ChatContext";

const ChatAreaHeader = () => {
  const [themeIcon, setThemeIcon] = useState(null); //state to adjust depending on current theme
  const { theme, handleThemeSwitch } = useContext(AppContext); //get values from app context
  const { data } = useContext(ChatContext); // data of current state of active user in chat context

  useEffect(() => {
    //change theme icon depending on theme
    if (theme === "dark") {
      setThemeIcon(sunIcon);
      return;
    }

    setThemeIcon(moonIcon);
  }, [theme]);

  return (
    <div className="h-[75px] bg-blue-300 p-4 light-blue-dark flex justify-between items-center border-b border-b-gray max-md:h-max max-sm:flex-col max-sm:gap2">
      <div className="flex items-center gap-4">
        {data.userInfo.photoURL && (
          <img
            className="w-14 h-14 rounded-full max-sm:hidden"
            src={data.userInfo?.photoURL}
            alt="Large avatar"
          />
        )}
        <div>
          <p className="text-2xl font-semibold max-md:text-base">
            {data.userInfo?.displayName}
          </p>
        </div>
      </div>

      <Tooltip content="Toggle Theme" placement="left">
        <button
          className="py-1 px-1 rounded-full shadow text-xl btn-white btn-white:hover"
          onClick={handleThemeSwitch}
        >
          <img className="w-8 h-8 rounded" src={themeIcon} alt="Toggle theme" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ChatAreaHeader;
