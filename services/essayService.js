import axios from 'axios'
function CreateEssay(formData){
    const payload = {
        contents: formData.contents,
        comments: []
    }
    console.log(localStorage.getItem("studentid"))
    return axios.post(`https://XReview-Backend.grandwarlock.repl.co/essays?studentid=`+localStorage.getItem("studentid"), payload).then((user)=>user).catch((e)=> e)
}

function GetEssay(formData){
    const payload = {
        username: formData.username,
        password: formData.password,
    }
    return axios.post(`https://XReview-Backend.grandwarlock.repl.co/users`, payload).then((token)=>token).catch((e)=> e)
}



export default {CreateEssay, GetEssay}