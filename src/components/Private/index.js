import React from "react";

const Private = (props) => {
  const logout = () => {
    localStorage.clear();
    props.setIsAuth(false);
  }
  return <div>
      <h1>Private</h1>
      <p><button 
          type="button" 
          onClick={()=>{logout()}}
        >Logout</button></p>
  </div>;
};

export default Private;
