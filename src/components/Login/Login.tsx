import React from 'react';

export const Login = () => {
    return(
        <div>
        <h1>LOGIN</h1>
        <LginForm/>
        </div>
    )
}


export const LginForm = () => {
    return (
        <>
        <form >
            <div>
                <input type="text" placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"} />
            </div>
            <div>
                <input type={"checkbox"} />
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
        </>
    )
}