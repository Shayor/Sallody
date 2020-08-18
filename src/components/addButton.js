import React, { useContext } from 'react';
import {Context} from "../Context/AppContext"

const AddButton = ({ detail }) => {
    const {cartItems, addtoCart, removefromCart} = useContext(Context)
    const isFound = cartItems.some(data=>data.id===detail.id);
    if(isFound){
        return <button className="button-primary"
        onClick={()=>removefromCart(detail)}
            disabled >ADDED</button>
    } else{
        return <button className="button-primary"
            onClick={()=>addtoCart(detail)}
            >ADD TO CART</button>
    }
}

export default AddButton;
