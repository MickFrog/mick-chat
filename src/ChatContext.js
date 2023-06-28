import { createContext, useContext, useReducer } from "react";
import { AppContext } from "./App";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AppContext);

  const INITIAL_STATE = {
    //state to keep track of active user chat selected
    chatId: "",
    userInfo: {
      displayName: "No chat selected",
    },
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_ACTIVE_CHAT":
        return {
          userInfo: action.payload,
          chatId:
            currentUser.uid > action.payload.userId
              ? currentUser.uid + action.payload.userId
              : action.payload.userId + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
