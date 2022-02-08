import React, { ChangeEvent, } from "react";


type ProfileStatusPropsType = {
    status: string 
    updateUserStatusThunkCreator: (status : string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType>{

    // statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
        
    }

    disactivateEditMode (){
        this.setState({
            editMode: false
        });
        this.props.updateUserStatusThunkCreator(this.state.status)
    }

    onStatusChange =(e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        // this.props.updateUserStatusThunkCreator(this.state.status)
    }

    // componentDidUpdate (pevProps, prevState) {
    //    if(prevProps.status)
        
    // }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status }</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.disactivateEditMode.bind(this)} 
                        value={this.state.status}  autoFocus />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus