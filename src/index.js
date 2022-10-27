import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import {Provider} from "react-redux"
import { REACT_APP_API_URL } from './consts/consts';
import { store } from './reducers';






export const Context = createContext()

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
       

    }}>
        <App />
    </Context.Provider>,
    </Provider> 
  
);