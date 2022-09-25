import axios from 'axios'
function CreateUser(formData){
    const payload = {
        username: formData.username,
        password: formData.password,
        realname: formData.name
    }
    return axios.post(`https://XReview-Backend.grandwarlock.repl.co/users`, payload).then((user)=>user).catch((e)=> e)
}

function LogInUser(formData){
    const payload = {
        username: formData.username,
        password: formData.password,
        realname: ""
    }
    return axios.post(`https://XReview-Backend.grandwarlock.repl.co/users/login`, payload).then((user)=>user).catch((e)=> e)
}



export default {CreateUser, LogInUser}