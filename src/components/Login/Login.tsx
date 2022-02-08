import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form"


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

 


    

 const LginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={"input"} name={'login'} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={'password'} placeholder={"Password"} />
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


