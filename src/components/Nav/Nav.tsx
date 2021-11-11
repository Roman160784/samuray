import React from 'react';
import s from './Nav.module.css'

function  Nav(){
return (
<nav className={s.nav}>
        <div className={s.iteam}>
          <a>Profile</a>
        </div>
        <div className={`${s.iteam} ${s.active}`}>
        <a>Messges</a> 
        </div>
        <div className={s.iteam}>
        <a>News</a> 
        </div>
        <div className={s.iteam}>
        <a>Music</a> 
        </div>
        <div className={s.iteam}>
        <a>Settings</a> 
        </div>
      </nav>
)
}

export default Nav;