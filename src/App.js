import React, {useState} from "react";
import Private from "./components/Private";
import Public from "./components/Public";

const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  return <div>
          {isAuth ?
            <Private /> 
          : 
            <Public />
          }</div>;
};

export default App;
