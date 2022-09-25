import axios from 'axios'


function joinRoom(formData){
    const payload = {
        name: formData.name,
        roomname: formData.code,
        essayid: formData.essayid
    }
    console.log(formData.code)
    return axios.post(`https://springbootthing.grandwarlock.repl.co/students`, payload).then((token)=>token).catch((e)=> e)
}



export default {joinRoom}