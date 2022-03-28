import { ContactsType, ProfileType } from "../../../../redux/state"
import { Contacts } from "./ProfileInfo"
import { useFormik } from 'formik';
import p from './ProfileInfo.module.css'

export type ProfileDataFormPropsType = {
  profile: ProfileType
  isOwner: boolean
  getDataFormValues: (values: dataFormType) => void
}

export type dataFormType ={
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {


  const formik = useFormik({
    initialValues: {
      fullName: props.profile.fullName,
      lookingForAJob: props.profile.lookingForAJob,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      aboutMe: props.profile.aboutMe,
      contacts: {
        facebook: props.profile.contacts.facebook,
        website: props.profile.contacts.website,
        vk: props.profile.contacts.vk,
        twitter: props.profile.contacts.twitter,
        instagram: props.profile.contacts.instagram,
        youtube: props.profile.contacts.youtube,
        github: props.profile.contacts.github,
        mainLink: props.profile.contacts.mainLink,
      }
      
    },
    onSubmit: values => {
      props.getDataFormValues(values)
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
            return <div className={p.contacts}>
              <b>{key} : <input type="text" {...formik.getFieldProps(`contacts[${key}]`)} /></b>
            </div>
            //Собрали значение в формик для объекта в объекте
          }
        })}
      </div>
    </form>

  )
}


