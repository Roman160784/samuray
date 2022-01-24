import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'



function  Nav(){
return (
<nav className={s.nav}>
        <div className={s.iteam}>
          <NavLink className={(navData) => navData.isActive? s.active:""} to="/Profile">Profile</NavLink>
        </div>
      <div className={`${s.iteam} ${s.active}`}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/Dialogs">Messges</NavLink> 
        </div>
        <div className={s.iteam}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/Users">Users</NavLink> 
        </div>
        {/* <div className={s.iteam}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/ProfilePerson">Pesonal Profile</NavLink> 
        </div> */}
        <div className={s.iteam}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/News">News</NavLink> 
        </div>
        <div className={s.iteam}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/Music">Music</NavLink> 
        </div>
        <div className={s.iteam}>
        <NavLink className={(navData) => navData.isActive? s.active:""} to="/Settings">Settings</NavLink> 
        </div>
      </nav>
)
}

export default Nav;