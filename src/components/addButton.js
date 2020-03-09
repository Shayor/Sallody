import React, { useContext } from 'react';
import {Context} from "../Context/AppContext"

const AddButton = ({ detail }) => {
    const {cartItems, addtoCart, removefromCart} = useContext(Context)
    const isFound = cartItems.some(data=>data.id===detail.id);
    if(isFound){
        return <a className="button-primary"
        onClick={()=>removefromCart(detail)}
            disabled >ADDED</a>
    } else{
        return <a className="button-primary"
            onClick={()=>addtoCart(detail)}
            >ADD TO CART</a>
    }
}

export default AddButton;
