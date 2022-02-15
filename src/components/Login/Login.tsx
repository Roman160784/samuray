
import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, InjectedFormProps} from "redux-form"
import { loginTC } from '../../redux/Auth-reducer';
import { maxLengthCreater, requairedField } from '../../utils/validators/validater';
import { InputForLogin } from '../formsControls/FormsControls';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLengthValidater = maxLengthCreater(30)

 const LginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={InputForLogin} name={'email'} placeholder={"Email"}
                validate={[requairedField, maxLengthValidater]}
                />
            </div>
            <div>
                <Field component={InputForLogin} name={'password'} placeholder={"Password"} type={"password"}
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

type LoginPropsType = {
    loginTC : (email: string, password: string,  rememberME: boolean) => void
}


const Login = (props: LoginPropsType) => {
    const onSubmit=(formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
        
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



export default connect(null, {loginTC})(Login)