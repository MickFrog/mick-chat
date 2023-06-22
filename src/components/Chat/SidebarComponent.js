import React from "react";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import SidebarChat from "./SidebarComponents/SidebarChat";


const SidebarComponent = (props) => {

    return(
        <div className="border-r border-r-gray flex flex-col bg-blue-300 text-slate-950 font-nunito">
            <SidebarHeader />

            <SidebarChat />
        </div>
    );

};

export default SidebarComponent;