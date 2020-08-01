import React, {useState} from "react";

const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        const user = {
            username,
            password
        };
        const url = "http://localhost/api/users/login";
        fetch(url, {
            method: "POST",
            headers:{
                "content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(json=>console.log(`Usuario ${json.name} autenticado`))
        .catch(err=>console.log("Usuario no existe"));
    };

    return (
        <div>
            <form>
                <p> 
                    <label>Username</label><br />
                    <input 
                        type="text" 
                        name="username"
                        value={username}
                        onChange={event=>{setUsername(event.target.value)}}
                         />
                </p>
                <p> 
                    <label>Password</label><br />
                    <input 
                        type="password" 
                        name="password"
                        value={password}
                        onChange={event=>{setPassword(event.target.value)}}
                        />
                </p>
                <p><button
                    onClick={()=>{ handleClick() }} 
                    type="button"
                    >Iniciar sesión</button></p>
            </form>
        </div>
    )
};

export default Login;