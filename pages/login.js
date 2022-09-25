import Card from "../components/Card";
import LogInForm from "../components/LoginForm"
import NavBar from "../components/NavBar"

import jwt_decode from "jwt-decode";
import axios from "axios"
const LogIn = (props) => {
    return (<div>
        <NavBar userData={props.userData}></NavBar>
        <div>
            <div className="p-7">
                <div className="grid grid-cols-3 gap-4">
                    <div></div>
                    <Card title="Log In" titleAlign="text-center">
                        <div className="text-center text-black">Take control of your health!</div>
                        <div className="mt-10">
                            <LogInForm></LogInForm>
                        </div>
                    </Card>

                    <div></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LogIn;
