import React from 'react';
import preloader from '../../assets/gif/preloader.gif'
import s from './preloader.module.css'

export const Preloader = () => {
    // return <div> <img src={preloader}/> </div>
    return (
        <div className={s.center}>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
      <div className={s.wave}></div>
    </div>
        )
}