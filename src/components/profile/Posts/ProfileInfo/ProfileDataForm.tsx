import { ProfileType } from "../../../../redux/state"
import { Contacts } from "./ProfileInfo"
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { setProfileDataTC } from "../../../../redux/Profile-reducer";

export type ProfileDataFormPropsType = {
  profile: ProfileType
  isOwner: boolean
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      fullName: props.profile.fullName,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      aboutMe: '',

    },
    onSubmit: values => {
      dispatch(setProfileDataTC(values))
      // alert(JSON.stringify(values, null, 2));
      // formik.resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div> <button >Save Form</button> </div>
      <div>
        <b>Full name </b> <div> <input type="text" {...formik.getFieldProps('fullName')} /> </div> 
      </div>
      <div>
        <b>Loking for a job </b>  <div> <input type="checkbox" {...formik.getFieldProps('lookingForAJob')} /> </div> 
      </div>
      <div>
        <b>My professional skils</b> <div> <textarea {...formik.getFieldProps('lookingForAJobDescription')}></textarea> </div> 
      </div>
      <div>
        <b> About me </b> <div> <input type="text" {...formik.getFieldProps('aboutMe')} /> </div> 
      </div>
      <div>
        <b> Contacts :</b> {Object.keys(props.profile.contacts).map(key => {
          const data = props.profile?.contacts
          if (data) {
            return <Contacts key={key} contactsTitle={key} contactsValue={data[key as keyof typeof data]!} isOwner={props.isOwner} />
          }
        })}
      </div>
    </form>

  )
}


