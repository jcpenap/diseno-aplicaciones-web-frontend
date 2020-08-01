import React, {useState} from "react";
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleClick = () => {
        if(password === passwordConfirmation){
            const user = {
                name,
                username,
                password
            };
        }
    };

    return (
        <div>
        <h1>Sign Up</h1>
            <form>
                <p> 
                    <label>Name</label><br />
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={event=>{setName(event.target.value)}}
                         />
                </p>
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
                <p> 
                    <label>Password Confirmation</label><br />
                    <input 
                        type="password" 
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={event=>{setPasswordConfirmation(event.target.value)}}
                        />
                </p>
                <p><button
                    onClick={()=>{ handleClick() }} 
                    type="button"
                    >SignUp</button></p>


                <p><Link to="/">Home</Link> or <Link to="/login">Sign In</Link></p>
            </form>
        </div>
    )
};

export default SignUp;