import React, { ComponentType, FC, Suspense } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/preloader/preloader";
import { AppRootStateType } from "../redux/reduxStore";



export function WithSuspense <T>(Component: ComponentType<T>): FC<T> {


    const NewComponent: FC<T> =  (props) => {
      return <Suspense fallback={<Preloader/>}>
          <Component {...props as T}/>
      </Suspense> 
    }

    return NewComponent
}