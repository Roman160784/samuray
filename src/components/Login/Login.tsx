
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {Field, reduxForm, InjectedFormProps} from "redux-form"
import { loginTC } from '../../redux/Auth-reducer';
import { AppRootStateType } from '../../redux/reduxStore';
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
    isAuth: boolean
    loginTC : (email: string, password: string,  rememberME: boolean) => void
}



const Login = (props: LoginPropsType) => {
    const onSubmit=(formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
        
    }

if(props.isAuth){
return <Navigate to={'/Profile'}/>
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

type MSTP = {
    isAuth: boolean  
}


const mapStateToProps = (state: AppRootStateType):MSTP => ({
    isAuth : state.authReducer.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)