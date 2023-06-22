import React from "react";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import SidebarChatContainer from "./SidebarComponents/SidebarChatContainer";


const SidebarComponent = (props) => {

    return(
        <div className="border-r border-r-gray flex flex-col bg-blue-300 text-slate-950 font-nunito relative h-screen overflow-auto">
            <SidebarHeader />

            <SidebarChatContainer />           
        </div>
    );

};

export default SidebarComponent;