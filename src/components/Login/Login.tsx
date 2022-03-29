
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {Field, reduxForm, InjectedFormProps} from "redux-form"
import { isPropertySignature } from 'typescript';
import { loginTC } from '../../redux/Auth-reducer';
import { AppRootStateType } from '../../redux/reduxStore';
import { maxLengthCreater, requairedField } from '../../utils/validators/validater';
import { InputForLogin } from '../formsControls/FormsControls';
import styles from '../formsControls/FormsControls.module.css'
import { Preloader } from '../preloader/preloader';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type FormOwnProps = {
    captcha: string | null
}

const maxLengthValidater = maxLengthCreater(30)
    const LginForm: React.FC<InjectedFormProps<FormDataType, FormOwnProps> & FormOwnProps> = ({handleSubmit, error, captcha}) => {
    
    return (
        <>
        <form onSubmit={handleSubmit}>
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
            { error && <div className={styles.summoryError}>{error}</div>}
           
            <div> {captcha && <img src={captcha}/> } </div>
            <div>{captcha !== null
             ? <Field component={InputForLogin} name={'captcha'} type={"text"}  />  : null
             }
             </div>
             <div>
                <button>Log In</button>
            </div>
        </form>
        </>
    )
}

const LoginReduxForm = reduxForm<FormDataType, FormOwnProps>({form:"login"})(LginForm)  

type LoginPropsType = {
    isAuth: boolean
    captcha: string | null
    loginTC : (email: string, password: string,  rememberME: boolean, captcha: string | null) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit=(formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha);
        
    }

if(props.isAuth){
return <Navigate to={'/Profile'}/>
} 

    return(
        <div>
        <h1>LOGIN</h1>
        <LoginReduxForm
        onSubmit={onSubmit}
        captcha={props.captcha}
        />
        </div>
    )
}

type MSTP = {
    isAuth: boolean
    captcha: string | null
}


const mapStateToProps = (state: AppRootStateType):MSTP => ({
    isAuth : state.authReducer.isAuth,
    captcha : state.authReducer.captcha
})

export default connect(mapStateToProps, {loginTC})(Login)