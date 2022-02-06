import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../redux/reduxStore";

type MSTPType = {
    isAuth: boolean
}

const MSTP = (state: AppRootStateType): MSTPType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function WithAuthRedirectComponent<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MSTPType) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Navigate replace to="/Login" />

        return <Component {...restProps as T} />
    }

    let ConnectedReRedirectComponent = connect(MSTP)(RedirectComponent)

    return ConnectedReRedirectComponent
}