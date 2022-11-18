import React from "react";
import {combineReducers, createStore } from "redux";
import { basketReducer } from "./basketReducer";
import { loadState,saveState } from "../localStorage";


const loadedState=loadState()

const rootReducer=combineReducers({
    basket:basketReducer,

})

export const store=createStore(rootReducer)
