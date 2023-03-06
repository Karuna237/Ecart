import Login from './Components/Login';
import Home from './Components/Home';
import Cart from "./Components/Cart"



import React,{useState} from "react";

function App() {
  const [verify,setVerify]=useState(1)
  const [data,setData]=useState([])
  const verifyy=(v)=>{
    setVerify(v)
  }
  
  const Cartt=(e)=>{
       setData((data)=>([...data,e]))
  }
  switch (verify) {
    case 1:
      return <Login verifyy={verifyy}/>;
    case 2:
      return <Home verifyy={verifyy} Cartt={Cartt}/>;
    case 3:
      return <Cart verifyy={verifyy} data={data}/>;
    default:
      return <h1>Error...</h1>;
  }
  
}

export default App;
