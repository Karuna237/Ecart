import Items from "./Items";
import  style from"./Cart.module.css"
import { useState } from "react";
import { BsCartFill } from "react-icons/bs";

function Cart(props){
    var s=props.data;
    const [data,setData]=useState(s)
    const Logout=()=>{
        props.verifyy(1);
        }
    const Homee=()=>{
        props.verifyy(2);
    }
    
    const Wishlist=(e)=>{
        let m=data.filter((data)=>data.name!==e.name)
        setData(m)
    }
    return(
        <div className={style.Wrapper}>
            <header className={style.head}>
        <h1 onClick={Homee}>Home</h1>
        <h1><BsCartFill/></h1>
            <div className={style.logout}>
                <button onClick={Logout}>Logout</button>
            </div>
        </header>
        {data.length>0?data.map((product)=>(<Items key={product.ID} name={product.name} src={product.url} price={product.price} des={"remove from Cart"} Wishlist={Wishlist} />)):<p>Your cart is empty</p>}
        </div>
        
    )
}
export default Cart;