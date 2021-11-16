import React from 'react';
import s from './Dialogs.module.css'



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            <div className= {`${s.dialog} ${s.active}`}>
                    Raman
                </div>
                <div className={s.dialog}>
                    Akhmed
                </div>
                <div className={s.dialog}>
                    Jafar
                </div>
                <div className={s.dialog}>
                    Fatima
                </div>
                <div className={s.dialog}>
                    Nurik
                </div>
                <div className={s.dialog}>
                    Ramzan
                </div>
                <div className={s.dialog}>
                    Zufra
                </div>
            </div>

            <div className={s.meaasges}>
                <div className={s.meaasge}>Hey</div>
                <div className={s.meaasge}>Hi</div>
                <div className={s.meaasge}>Hello</div>
            </div>
        </div>

    )
}

export default Dialogs;

