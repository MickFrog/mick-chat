import React from "react";

const SidebarComponent = (props) => {

    const handleLogOut = () => {
        props.logOutCall()
    }

    return(
        <div className="border-r border-r-black">
            <button className="btn" onClick={handleLogOut}>SignOut</button>
            SideBar
        </div>
    );

};

export default SidebarComponent;