import userEvent from "@testing-library/user-event";
import React, { ChangeEvent, useEffect, useState, } from "react";


type ProfileStatusPropsType = {
    status: string 
    updateUserStatusThunkCreator: (status : string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState <boolean> (false)
    const [value, setValue] = useState <string> (props.status)
  
    useEffect(() => {
        setValue(props.status)
    }, [props.status])
    
const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
}

const onDoubleClickHandler = () => {
    setEditMode(true)
}

const onBlurHandler = () => {
    props.updateUserStatusThunkCreator(value)
    setEditMode(false) 
}
    
        return (
           
                editMode
                   ? <div>
                        <span onDoubleClick={onDoubleClickHandler}>{props.status }</span>
                    </div>
                   : <div>
                        <input onChange={onChangeHandler} onBlur={onBlurHandler} 
                        value={value}  autoFocus />
                    </div>
                
        )
    
}

export default ProfileStatusWithHooks