import { ProfileType } from "../../../../redux/state"
import { Contacts } from "./ProfileInfo"
import { useFormik } from 'formik';

export type ProfileDataFormPropsType = {
    profile: ProfileType 
    isOwner: boolean
  }
  
  export const ProfileDataForm = (props: ProfileDataFormPropsType) => {

    const formik = useFormik({
      initialValues: {
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: '',

      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        formik.resetForm()
      },
    });
  
    return (
        <form onSubmit={formik.handleSubmit}>
            <div> <button >Save Form</button> </div>
            <div>
              <b>Full name </b> <input type="text" {...formik.getFieldProps('fullName')}/>
            </div>
            <div>
              <b>Loking for a job </b> <input type="checkbox" {...formik.getFieldProps('lookingForAJob')}  />

            </div>
            {props.profile.lookingForAJob 
            && <div> <b>My professional skils</b>  <input {...formik.getFieldProps('lookingForAJobDescription')}/>
       </div>}
            <div>
              <b> About me </b> <input type="text" {...formik.getFieldProps('aboutMe')} />
            </div>
            <div>
              <b> Contacts :</b> {Object.keys(props.profile.contacts).map(key => {
                const data  = props.profile?.contacts
                if(data) {return <Contacts key={key} contactsTitle={key} contactsValue={data[key as keyof typeof data]!} isOwner={props.isOwner}/>
              }})}    
            </div>
          </form>
     
    )
  }


