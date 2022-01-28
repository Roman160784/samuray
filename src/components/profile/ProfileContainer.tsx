import React from "react";
import Profile from "./Profile";
import  axios from "axios";
import {connect} from 'react-redux';
import { useParams} from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../redux/state";
import { setUsersPropfileAC } from "../../redux/Profile-reducer";

const withRouter = (WrappedComponent: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) => {
    const params = useParams<any>();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

type ProfileContainerPropsType__ = {
  profile: ProfileType | null
  setUsersPropfileAC: (propfile: ProfileType) => void
  params: any
}

class ProfileContainer extends React.Component <ProfileContainerPropsType__>{
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId){
            userId="2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUsersPropfileAC(response.data);
            });
    }
    render () {
    
    return(
<Profile {...this.props}  profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUsersPropfileAC
}) (WithUrlDataContainerComponent);