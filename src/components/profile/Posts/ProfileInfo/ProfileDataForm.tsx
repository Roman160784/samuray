import { ProfileType } from "../../../../redux/state"
import { Contacts } from "./ProfileInfo"

export type ProfileDataFormPropsType = {
    profile: ProfileType 
    isOwner: boolean
  }
  
  export const ProfileDataForm = (props: ProfileDataFormPropsType) => {
  
    return (
      <div>
        <div>
            <div>
              <b>Full name </b> {props.profile.fullName}
            </div>
           
            <div>
              <b>Loking for a job </b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {props.profile.lookingForAJob && <div>
              <b>My professional skils</b>  {props.profile.lookingForAJobDescription}</div>}
            <div>
              <b> About me </b> {props.profile.aboutMe}
            </div>
            <div>
              <b> Contacts :</b> {Object.keys(props.profile.contacts).map(key => {
                const data  = props.profile?.contacts
                if(data) {return <Contacts key={key} contactsTitle={key} contactsValue={data[key as keyof typeof data]!} isOwner={props.isOwner}/>
              }})}    
            </div>
          </div>
      </div>
    )
  }