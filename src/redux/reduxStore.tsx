import { combineReducers, createStore } from "redux";
import { ActionsDialogsType, dialogReducer } from "./Dialogs-reducer";
import { ActionsProfileType, profileReducer } from "./Profile-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


export let store = createStore(redusers);

export type AppRootStateType = ReturnType<typeof redusers>

export type Dispathc = typeof store.dispatch

export type actionType = ActionsDialogsType | ActionsProfileType 