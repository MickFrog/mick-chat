import React from "react";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import SidebarChatContainer from "./SidebarComponents/SidebarChatContainer";


const SidebarComponent = (props) => {

    return(
        <div className="border-r border-r-gray flex flex-col bg-blue-300 light-blue-dark font-nunito relative h-full">
            <SidebarHeader />

            <SidebarChatContainer />           
        </div>
    );

};

export default SidebarComponent;