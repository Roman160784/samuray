import React, { ChangeEvent, useState } from "react";

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus  extends React.Component <ProfileStatusPropsType>{

//     let [status, setStatus] = useState("")

// const onCangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setStatus(e.currentTarget.value)
// }
render () {
    return (
        <div>
        <div>
            <span>{this.props.status}</span>
        </div>
        <div>
            <input value={this.props.status} onChange={() => {}} type="text" />
        </div>
        </div>
    )
} 
}

export default ProfileStatus