import React from 'react';
import styles from './FormsControls.module.css'

type TextAreaPropsType = {
    meta: any
    input: any
}




export const TextArea = (props: TextAreaPropsType) => {

    const showError = props.meta.touched && props.meta.error

    return (
        <div className={styles.formControl + " " + (showError ? styles.error : "")}>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            {showError && <span>{props.meta.error}</span>}
        </div>
    )
}