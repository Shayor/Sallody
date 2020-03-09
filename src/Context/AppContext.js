import React, { useState, useEffect } from "react"
const Context = React.createContext()

function AppContextProvider({children}){
    const [dataItems,setData] = useState([])
    const [cartItems, setCartItems] =useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Shayor/e-commerce-data-bank/master/Item.json")
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
    function addtoCart(detail){
        setCartItems(prevState => prevState.concat(detail))
    }
    function removefromCart(detail){
        setCartItems(prevState => prevState.filter(data => data.id !== detail.id))
    }
    // console.log(cartItems)
    return(
        <Context.Provider value={{cartItems, dataItems,addtoCart,removefromCart}}>
            {children}
        </Context.Provider>
    )
}
export {AppContextProvider, Context}