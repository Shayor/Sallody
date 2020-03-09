import React, {useContext} from "react"
import {Context} from "../Context/AppContext"

function TotalAmount(){
    const {cartItems} = useContext(Context);
    const subTotalPrice = cartItems.reduce((initVal, item)=>{
        return initVal + item.price
    },0)

    return(
        <span>
            {subTotalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}
        </span>
    )
}

export default TotalAmount