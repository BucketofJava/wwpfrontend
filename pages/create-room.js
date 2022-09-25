import Card from "../components/Card"
import NavBar from "../components/NavBar"
import TextField from "../components/TextField"
import Button from "../components/Button"
import EssayForm from "../components/EssayForm"
import roomService from "../services/roomService"
const Slay = () => {
    const room = () => {
        console.log("woooo")
        roomService.CreateRoom({username: localStorage.getItem("username")}).then((room) => {
            console.log(room.data)
            alert("Room created! Your code is " + room.data.code)
          }).catch(() => window.location.reload())
    }
    return (
        <div>
            <NavBar />
            <div className="p-7">
            <div className="grid grid-cols-2 gap-4">
            <Card title="Create Room" titleAlign="text-center">
                <Button onClick={room} color="bg-sky-300">Create</Button>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default Slay