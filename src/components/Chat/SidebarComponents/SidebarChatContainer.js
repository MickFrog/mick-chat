import React, { useContext, useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import { fireDB } from "../../../firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { AppContext } from "../../../App";

const SidebarChatContainer = () => {

    const [chats, setChats] = useState([])      //chats to be fetched from firestore db
    const {currentUser} = useContext(AppContext);

    useEffect(() => {
        const fetchChats = () => {
            const unsub = onSnapshot(doc(fireDB, "userChats", currentUser.uid), (doc) => {
                console.log("Current data: ", doc.data());
            });

            return () => { //clean up resources of snapshot listener
                unsub();
            }
        };

        //get chats if currentUser is signed in
        currentUser.uid && fetchChats();
    }, [currentUser.uid])

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