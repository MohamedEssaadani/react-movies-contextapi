import React, { createContext, useContext, useReducer } from "react";

// create  Store context
export const Store = createContext();

// useStore
export const useStore = () => useContext(Store);

// store provider
export const StoreProvider = ({ children, initialState, reducer }) => {
  // state & dispatch
  const [state, dispatch] = useReducer(initialState, reducer);

  // Store Provider
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};
