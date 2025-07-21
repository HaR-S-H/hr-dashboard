"use client";
import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { appReducer, initialState } from '../reducers/appReducer';

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};