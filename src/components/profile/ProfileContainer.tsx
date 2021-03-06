import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { useNavigate, useParams,  } from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../redux/state";
import { getUsersStatusThunkCreator, savePhotoTC, setUsersPropfileThunkCreator, updateUserStatusThunkCreator } from "../../redux/Profile-reducer";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthComonent"
import { compose } from "redux";


const withRouter = (WrappedComponent: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) => {
    const params = useParams<any>();
    const navigate = useNavigate()

    return (
        <WrappedComponent
            {...props}
            params={params}
            navigate={navigate}
        />
    );
};

export type ProfileContainerPropsType__ = {
    profile: ProfileType | null
    status: string 
    navigate: any
    params: any
    autorisedUserId: string | number | null
    setUsersPropfileThunkCreator: (id: string, propfile: ProfileType | null) => void
    getUsersStatusThunkCreator: (userId: string) => void
    updateUserStatusThunkCreator : (status: string) => void
    sendNewPost: (newPostText: string) => void
    savePhotoTC: (img: File) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType__>{
    [x: string]: any;

    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.autorisedUserId;
            if(!userId) {
                this.props.navigate.push('/Login')
            }
        }

        this.props.setUsersPropfileThunkCreator(userId, this.props.profile)
        this.props.getUsersStatusThunkCreator(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfileContainerPropsType__) {
        if (this.props.params.userId !== prevProps.params.userId){
            this.refreshProfile()
        }
    }
        

    render() {
        
        return (
            <Profile {...this.props} 
            isOwner={!this.props.params.userId}
            profile={this.props.profile}
            status={this.props.status} 
            updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
            savePhoto={this.props.savePhotoTC}
            />
        )
    }
}

type MSTP = {
    status: string | null
    profile: ProfileType | null
    isAuth: boolean
    autorisedUserId: string | number | null
}

let mapStateToProps = (state: AppRootStateType): MSTP => ({
    profile: state.profilePage.profile,
    isAuth: state.authReducer.isAuth,
    status: state.profilePage.status,
    autorisedUserId: state.authReducer.id
});



export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersPropfileThunkCreator, getUsersStatusThunkCreator, updateUserStatusThunkCreator, savePhotoTC}),   
    withRouter,
    WithAuthRedirectComponent,
)(ProfileContainer)


