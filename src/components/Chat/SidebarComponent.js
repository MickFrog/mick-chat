import React from "react";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import SidebarChat from "./SidebarComponents/SidebarChat";


const SidebarComponent = (props) => {

    return(
        <div className="border-r border-r-gray flex flex-col bg-blue-300 text-slate-950 font-nunito relative h-screen overflow-auto">
            <SidebarHeader />

            {/* Chats container */}
            <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 
            hover:scrollbar-track-slate-300 scrollbar-thumb-rounded scrollbar-track-rounded ">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
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
        </div>
    );

};

export default SidebarComponent;