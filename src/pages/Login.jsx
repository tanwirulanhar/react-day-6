import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState(""); //1
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChangeUsername = (event) => {
        console.log(event);
        setUserName(event.target.value);
    };
    const handChangePassword = (event) => {
        console.log(event);
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const payload = {
            username: userName,
            password: password,
        };

        try { //buat data yang berhasil
            const response = await axios.post(
                "https://api.mudoapi.tech/login",
                payload
            );
            console.log(response);

            const token = response.data.data.token;
            setToken(token);

            setTimeout(() => {
                navigate("/");
            }, 2000);

            

           
           

        } catch (error) {  //buat data yang tidak brhasil login
            console.log(error.response);

            const errorMassage = error.response.data.message;
            
            setError(errorMassage);
        }
      

    };

    return (
        <div>
           
            <Navbar/>

            {token && <h1> anda berhasil login </h1>}
            {error && <h1> {error} </h1>}

            <input onChange={handleChangeUsername} placeholder="masukan username" />
            <input onChange={handChangePassword} placeholder="masukan password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};



export default Login;
