import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { ActionsDialogsType, dialogReducer } from "./Dialogs-reducer";
import { ActionsProfileType, profileReducer } from "./Profile-reducer";
import { ActionsUsersType, usersReducer } from "./User-reducer";
import { ActionsAuthType, authReducer } from "./Auth-reducer";
import  thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage :usersReducer,
    authReducer: authReducer,
    form: formReducer
})


export let store: Store<AppRootStateType> = createStore(redusers, applyMiddleware(thunkMiddleware)); 

export type AppRootStateType = ReturnType<typeof redusers>

export type Dispathc = typeof store.dispatch

export type actionType = ActionsDialogsType | ActionsProfileType | ActionsUsersType | ActionsAuthType