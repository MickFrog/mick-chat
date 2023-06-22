import React from "react";
import SidebarChat from "./SidebarChat";

const SidebarChatContainer = () => {
    return (
        <div className="flex flex-col overflow-y-auto my-custom-scrollbar">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />

        </div>
    );
}

export default SidebarChatContainer;