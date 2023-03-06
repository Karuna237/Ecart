import "./Items.css"

function Items(props){
    
    return(
        <div className="Wrapper">
        <div  className="Wrapper1">
        <div>
            <img src={props.src} alt="hi"/>
        </div>
        <div className="Wrapper2">
        <h1>{props.name}</h1>
        <p>Price:{props.price}</p>
        <button onClick={()=>{props.Wishlist(props)}}>{props.des}</button>
        </div>
        </div>
        </div>
        
    )
}
export default Items;