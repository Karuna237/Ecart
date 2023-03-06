import React,{useState}from "react";
import  style from "./Login.module.css"
function Login(props){
    const [inputs,setInputs]=useState({});
    const [e,setError]=useState(false)
    const database = [
        {
          username: "karuna",
          password: "12345"
        },
        {
          username: "sai",
          password: "5678"
        }
      ];
    
    const errors = "Invalid Credentials";
    
    const handlechange=(e)=>{
        setInputs((inputs)=>( {...inputs,[e.target.name]:e.target.value}))   
    }
    const handler=(e)=>{
        e.preventDefault();
        let user=database.find((user)=>(user.username===inputs.username))
        if(user){
            if(user.password===inputs.password){
                props.verifyy(2)
            }
        }
        else{
            setError(true)
            props.verifyy(1)
        }
    }


    return(
        <div className={style.Loginform}>
        <form onSubmit={handler} className={style.formm}>
            <h1 style={{color:"black"}}>Ecart</h1>
            <input className={style.name} type="text" name="username" value={inputs.username ||""} onChange={handlechange}placeholder="Username"/>
            <input className={style.pass} type="password" name="password" value={inputs.password||""} onChange={handlechange} placeholder="Password"/>{e&&errors}
            <button className={style.btn1}>Submit</button> 
        </form>
        </div>
    )
}
export default Login;