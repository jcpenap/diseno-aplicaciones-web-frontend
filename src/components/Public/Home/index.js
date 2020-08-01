import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <div>
        <h1>Home</h1>
        <p><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></p>
        </div>
    )
};

export default Home;