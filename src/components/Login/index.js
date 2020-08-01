import React from 'react';

const Login = () =>{
    return (
        <div>
            <form>
                <p> 
                    <label>Username</label><br />
                    <input type="text" name="username" />
                </p>
                <p> 
                    <label>Password</label><br />
                    <input type="password" name="password" />
                </p>
                <p><button type="button">Iniciar sesión</button></p>
            </form>
        </div>
    )
};

export default Login;