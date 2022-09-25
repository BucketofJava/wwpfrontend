import Card from "../components/Card"
import NavBar from "../components/NavBar"
import TextField from "../components/TextField"
import Button from "../components/Button"
import EssayForm from "../components/EssayForm"
import roomService from "../services/roomService"
import JoinForm from "../components/JoinForm";
import { Router } from "next/router"
import { useState } from "react"
const Join = () => {
    const [joinCode, setJoinCode]=useState("");
    const send = (id) => {
        Router.push(`/${id}`)
    }
    return (
        <div>
            <NavBar />
            <div className="p-7">
            <div className="grid grid-cols-2 gap-4">
            <Card title="Join Room" titleAlign="text-center">
            <JoinForm></JoinForm>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default Join;