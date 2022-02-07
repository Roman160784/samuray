import axios from "axios";
import { textChangeRangeIsUnchanged } from "typescript";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY" : "97175220-c190-496e-865d-5113b6c78275"
    } 
})

export const usersAPI = {
    getUsers(curentPage: number, pageSize: number){
        return instance.get(`users?page=${curentPage}&count=${pageSize}`)
         .then(response => {
             return response.data
         }
     )},
     followUsers(id=1){
         return instance.post(`follow/${id}`, {})
         .then(response => response.data)
     },
     unFollowUsers(id=1){
         return instance.delete(`follow/${id}`)
         .then(response => response.data)
     },
     setUserLogin() {
        return instance.get(`auth/me`)
        .then(response => response.data)
     },
   
}

export const profileAPI = {
    setUserLoginInProfile(id: string) {
        return instance.get(`profile/` + id)
        .then(response => response.data)
     }, 
     getUserStatus(id: string) {
         return instance.get(`/profile/status/` + id)
         .then(response => response.data)
     },
     updateUserStatus(status: string) {
         return instance.put(`/profile/status/`, {status: status})
         .then(response => response.data)
     }
     
}

