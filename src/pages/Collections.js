import React, {useContext} from "react"
import {Context} from "../Context/AppContext"
import CardItem from "../components/cardItem"

function Collections(){
    const {dataItems} = useContext(Context)
    const collections = dataItems.map(item=> <CardItem key={item.id} detail={item}/>)
    return(
        <div className="container trending">
            <h2>All Collections</h2>
            <div className="row">
                {collections}
            </div>
        </div>
    )
}

export default Collections