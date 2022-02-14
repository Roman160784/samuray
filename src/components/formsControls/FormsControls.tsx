import React from 'react';
import styles from './FormsControls.module.css'

type TextAreaPropsType = {
    meta: any
    input: any
}


export const TextArea = (props: TextAreaPropsType) => {
    return (
        <div className={styles.formControl}>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            <span>'Some error'</span>
        </div>
    )
}