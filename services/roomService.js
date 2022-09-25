import axios from 'axios'
function CreateRoom(d){
    console.log("slay")
    const payload = {
        teacherusername: d.username,
        code: Math.floor(Math.random() * 10000)
    }
    return axios.post(`https://springbootthing.grandwarlock.repl.co/rooms`, payload).then((room)=>room).catch((e)=> e)
}
function RoomStudents(d){
    return axios.get(`https://springbootthing.grandwarlock.repl.co/students`).then((students)=>
    {
       // console.log(students)
        const listOfIds = students.data.map((student) => student.essayid)
        axios.get(`https://springbootthing.grandwarlock.repl.co/essays`).then((essays)=> {
            console.log({data: students.data.filter((student) => student.roomcode == d.roomcode), essays: essays})
            return {data: students.data.filter((student) => student.roomcode == d.roomcode), essays: essays}
            
    }

    ).catch((e)=> e)
}

    ).catch((e)=> e)
}
function roomStudents(d){
    axios.get(`https://springbootthing.grandwarlock.repl.co/rooms/`+ d+ `?code=1`).then((room)=>{

        // return room.data.studentids.map(id =>  axios.get(`https://springbootthing.grandwarlock.repl.co/students/`+id).then((student)=>{
        //         console.log(student);   return student}).catch((e)=>{console.log(e);return {}}));
        return axios.get(`https://springbootthing.grandwarlock.repl.co/students/`).then((res)=>res.data.filter((student)=> room.data.studentids.includes(student.id)))
    }).catch((e)=>{console.log(e); return {"balls":1}})
}
function LogInUser(formData){
    const payload = {
        username: formData.username,
        password: formData.password,
        realname: ""
    }
    return axios.post(`https://springbootthing.grandwarlock.repl.co/users/login`, payload).then((user)=>user).catch((e)=> e)
}



export default {CreateRoom, RoomStudents, roomStudents, LogInUser}