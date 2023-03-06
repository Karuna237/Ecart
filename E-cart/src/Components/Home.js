import  style from"./Home.module.css"
import {FaSearch} from "react-icons/fa";
import Items from "./Items";
import camera from "../products/camera.jpg";
import headset from "../products/headset.jpg";
import shoes from "../products/shoes.jpg";
import softdrink from "../products/softdrink.jpg";
import spects from "../products/spects.jpg";
import watch from "../products/watch.jpg";
import React,{useState} from "react";
import {BsCart} from "react-icons/bs"
function Home(props){
    const [product,setProduct]=useState("");
    const [cart,setCart]=useState({});
    const [num,setNum]=useState(0)
    var data=[
        {
            ID:1,
            url: camera,
            name:"Camera",
            price:500
        },
        {
            ID:2,
            url: headset,
            name:"Headset",
            price:5000
        },
        {
            ID:3,
            url: shoes,
            name:"Shoes",
            price:800
        },
        {
            ID:4,
            url: softdrink,
            name:"Softdrink",
            price:100
        },
        {
            ID:5,
            url: spects,
            name:"Spects",
            price:1500
        },
        {
            ID:6,
            url: watch,
            name:"Watch",
            price:2000
        },
    ]
    const Wishlist=(c)=>{
        setCart((cart)=>({...c}))
        props.Cartt(cart)
        setNum((num)=>num+1)
    }
    const Logout=()=>{
        setCart({})
        data=[]
         props.verifyy(1);
    }
    const Carthandler=()=>{
        props.verifyy(3);
    }
   
    
    const s=data.filter((data)=>data.name===product);  

    if(s.length>0){
        
        return(
            <>
            <header className={style.head}>
                <h1>E-cart Home </h1>
            <div className={style.sear}>
                <input type="search" value={product} onChange={(e)=>setProduct(e.target.value)} name="searchh" placeholder="Search the product here"/>
                <button ><FaSearch/></button>
            </div>
            <div className={style.cart}>
                <button onClick={Carthandler} >cart<BsCart/></button>
            </div>
            <div className={style.logout}>
                <button onClick={Logout}>Logout</button>
            </div>
        </header>
            {s.map((product)=>(<Items key={product.ID} name={product.name} src={product.url} price={product.price} des={"Add to Cart"}/>))}
            </>
            )
    }

    
    return(
        <>
        <header className={style.head}>
        <h1>Home</h1>
            <div className={style.sear}>
                <input type="search" value={product} onChange={(e)=>setProduct(e.target.value)} name="searchh" placeholder="Search the product here"/>
                <button ><FaSearch/></button>
            </div>
            <div className={style.cart}>
                <button onClick={Carthandler}>cart<BsCart/>{num}</button>
            </div>
            <div className={style.Logout}>
                <button onClick={Logout}>Logout</button>
            </div>
        </header>
        <section>{data.map((product)=>(<Items key={product.ID} name={product.name} src={product.url} price={product.price} des={"Add to Cart"} Wishlist={Wishlist} />))}</section>
            
        </>
    )
}
export default Home;