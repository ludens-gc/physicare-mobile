import { createContext, useReducer } from "react";
import { useAuth } from "./auth";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { userUID } = useAuth();
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            userUID > action.payload.uid
              ? userUID + action.payload.uid
              : action.payload.uid + userUID,
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
