import React, { createContext, useReducer } from "react";
import { UserReducer } from "./Userreducer";

const userInitialState = { Users: [] };
export const GlobalContext = createContext(null);
function Contextprovider({ children }) {
  const [userState, userDispatch] = useReducer(UserReducer, userInitialState);
  return (
    <GlobalContext.Provider value={{ userState, userDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Contextprovider;
