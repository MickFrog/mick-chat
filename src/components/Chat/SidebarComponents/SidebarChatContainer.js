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
                setChats(doc.data());
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
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date) //convert object to array + sort starting from latest date
                .map((chatInfo) => {
                // 0 - userId, 1 - userInfo (object)
                return <SidebarChat key={chatInfo[0]} chatInfo={chatInfo[1]}/>
            })}

        </div>
    );
}

export default SidebarChatContainer;