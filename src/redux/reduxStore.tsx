import { combineReducers, createStore, Store } from "redux";
import { ActionsDialogsType, dialogReducer } from "./Dialogs-reducer";
import { ActionsProfileType, profileReducer } from "./Profile-reducer";
import { ActionsUsersType, usersReducer } from "./User-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage :usersReducer,
})


export let store: Store<AppRootStateType> = createStore(redusers);

export type AppRootStateType = ReturnType<typeof redusers>

export type Dispathc = typeof store.dispatch

export type actionType = ActionsDialogsType | ActionsProfileType | ActionsUsersType