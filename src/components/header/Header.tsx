import React from 'react';
import {NavLink} from 'react-router-dom'
import { AuthType } from '../../redux/state';
import h from'./Header.module.css'

type HeaderPropsType = {
  login: string | null
  isAuth: boolean
}

export function  Header(props : HeaderPropsType){

return (
<header className={h.header}>
        <img src='https://st3.depositphotos.com/5040187/19012/v/600/depositphotos_190129584-stock-illustration-ts-logo-swoosh-ellipse-blue.jpg'/>
        <div className={h.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
      </header>
)
}

