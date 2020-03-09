import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context/AppContext"
import DropdownCartItem from "./dropdownCartItem"
import TotalAmount from "./totalAmount"

function Header(){
    const {cartItems} = useContext(Context)
    const cartItem = cartItems.map(item=><DropdownCartItem key={item.id} detail={item}/>)
    const [visibility,setVisibility] = useState("hidden")
    // console.log(cartItems.l)
    function displayCart(){
        visibility=="hidden"?setVisibility("visible"):
        setVisibility("hidden")
    }
    return(
        <header>
            <div className="container">
                <div className="row lower-Nav">
                    <h3 className="col-md-1">SALLODY</h3>
                    <ul className="col-md-5">
                        <li><Link to='/'>HOME</Link></li>
                        {/* <li><Link to="/trending">TRENDING</Link></li> */}
                        <li><Link to="/collections">COLLECTION</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                    <div className="col-md-3 icons">
                        <span className="material-icons">search
                        </span>
                        <span className="material-icons"><Link to="/cart">local_grocery_store</Link></span>
                        <span onClick={displayCart}> | {<TotalAmount />}</span>
                        <span className="badge badge-success top-badge">{cartItems.length}</span>
                        {/* <span className="btn btn-primary">Sign Up</span> */}
                    </div>
                    <div className="col-md-3 buttons">
                        <div className="button"><a className="button-primary">SIGN UP</a></div>
                        <div className="button cart_icon"><a className="button-primary-outline">LOG IN</a></div>
                    </div>
                </div>
            </div>
            <div className="cartOverview" style={{visibility:visibility}}>
                <div className="container">
                    {cartItems.length === 0 ?<h5>There is nothing here</h5>:
                    <div>{cartItem}
                    <hr />
                    <h5 className="totalamount">Total Price : {<TotalAmount />}</h5>
                    </div>}
                </div>
            </div>
            {/* <hr /> */}
        </header> 
    )
}

export default Header