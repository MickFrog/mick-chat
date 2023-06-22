import React from "react";
import SidebarChat from "./SidebarChat";

const SidebarChatContainer = () => {
    return (
        <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 
        hover:scrollbar-track-slate-300 scrollbar-thumb-rounded scrollbar-track-rounded">
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