import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form"
import { maxLengthCreater, requairedField } from '../../utils/validators/validater';
import { InputForLogin } from '../formsControls/FormsControls';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLengthValidater = maxLengthCreater(15)

 const LginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={InputForLogin} name={'login'} placeholder={"Login"}
                validate={[requairedField, maxLengthValidater]}
                />
            </div>
            <div>
                <Field component={InputForLogin} name={'password'} placeholder={"Password"} 
                validate={[requairedField, maxLengthValidater]}
                />
            </div>
            
            <div>
                <Field component={"input"} name={'rememberMe'} type={"checkbox"} /> Remember 
            </div>
            <div>
                <button>Log In</button>
                </div>
        </form>
        </>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:"login"})(LginForm)

export const Login = () => {
    const onSubmit=(formData: FormDataType) => {
        console.log(formData);
        
    }

    return(
        <div>
        <h1>LOGIN</h1>
        <LoginReduxForm
        onSubmit={onSubmit}
        />
        </div>
    )
}


