import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context/AppContext"
import CartItem from "../components/cartItem"
import TotalAmount from "../components/totalAmount"

function CartPage(){
    const {cartItems} = useContext(Context);
    const cartItem = cartItems.map(item=><CartItem detail={item}/>)
    return(
        <div>{cartItems.length === 0 ? 
            <div className="emptyCart">
                <h5>There is nothing in the Cart</h5>
                <Link to="/collections" className="button-primary">Continue Shopping <span className="fa fa-angle-double-right"></span></Link>
            </div> :
            <div className="container cartPage">
                <h2>Cart Page</h2>
                <hr />
                <div className="row cartTable">
                    <div className="col-md-1">
                        <h4>Image</h4>
                    </div>
                    <div className="col-md-6">
                        <h4>Name</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Amount</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Quantity</h4>
                    </div>
                </div>
                <hr />
                {cartItem}
                <hr />
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3 totalAmountInCart">
                        <h5 className="totalamount">Sub Total : {<TotalAmount />}</h5>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CartPage