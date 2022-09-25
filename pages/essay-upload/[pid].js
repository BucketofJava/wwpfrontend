import Card from "../../components/Card"
import NavBar from "../../components/NavBar"
import TextField from "../../components/TextField"
import Button from "../../components/Button"
import EssayForm from "../../components/EssayForm"
import roomService from "../../services/roomService"
import { useEffect, useState } from "react"
import {useRouter} from 'next/router'
import { data } from "autoprefixer"
const Host = () => {
    const router = useRouter();
    const pid  = router.query.pid;
    const [isLoading, setLoading] = useState(false);
    const room = () => {
        console.log("woooo")
        roomService.CreateRoom({username: localStorage.getItem("username")}).then((room) => {
            console.log(room.data)
            alert("Room created! Your code is " + room.data.code)
          }).catch(() => window.location.reload())
    }
    const [students, setStudents] = useState([])

    useEffect(() => {
        setLoading(true)
        console.log("slay")
        if(pid!=undefined){
        console.log(pid)
     
        const st= async () => {await roomService.roomStudents(pid).then((students) => {
        console.log(students)
       
        // .then((students) => {
            console.log(students.data)
            setStudents(students.data)
            setEssays(students.essays)
            setLoading(false)
          }).catch(() => setStudents([]));}
        
          
}}, [pid])
    //.then((students) => {
    //         console.log(students)
    //         console.log(students.data)
    //         setStudents(students.data)
    //         setLoading(false)
    //       }).catch((e) => {
    //           console.log(e);
    //           setStudents([])})
    // }, [])
    if (!students||students.length==0){ 
        console.log(students);
        return <p>No profile data</p>}
    if (isLoading) return <p>Loading...</p>
    
    return (
        <div>
            <NavBar />
            <div className="p-7">
            
            {
            <div className="grid grid-cols-2 gap-4">
            {students.map((student) => {
                return (
                    <div className="mt-2">
                    <Card title={student.name} titleAlign="text-center">

                    </Card>
                    </div>
                )
            })}
            </div>
            }
            
            </div>
        </div>
    )
}

export default Host