import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import { Navigate, useParams } from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../redux/state";
import { setUsersPropfileThunkCreator } from "../../redux/Profile-reducer";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthComonent"
import { compose } from "redux";


const withRouter = (WrappedComponent: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) => {
    const params = useParams<any>();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

export type ProfileContainerPropsType__ = {
    profile: ProfileType | null
    params: any
    // isAuth: boolean
    setUsersPropfileThunkCreator: (id: string, propfile: ProfileType | null) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType__>{
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = "2";
        }

        this.props.setUsersPropfileThunkCreator(userId, this.props.profile)
        // usersAPI.setUserLoginInProfile(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //     .then(data => {
        //         this.props.setUsersPropfileAC(data);
        //     });
    }
    render() {
        return (
            <Profile {...this.props} 
            // isAuth={this.props.isAuth} 
            profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.authReducer.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);



//WithAuthRedirectComponent
// export default WithAuthRedirectComponent(connect(mapStateToProps, {
//     setUsersPropfileThunkCreator
// })(WithUrlDataContainerComponent));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersPropfileThunkCreator}),   
    withRouter,
    WithAuthRedirectComponent, 
)(ProfileContainer)