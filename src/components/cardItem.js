import React, { useState } from "react"
import {Link} from "react-router-dom"
import AddButton from "./addButton";

function CardItem({detail}){
    const [hovered, setHovered] = useState(false)

    return(
        <div className="col-md-3 card-item"
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        >
            {/* isFound? null : */}
            <img src={detail.url} alt={detail.name} />
            <p>{detail.name}</p>
            <h5>{detail.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h5>
            {
                hovered &&
                <div className="overlay-Component">
                    <div className="overlay"></div>
                    <div className="button add-to-cart" >
                        <AddButton detail={detail} />
                        <br />
                        <Link to={`collections/${detail.id}`} className="view-Details">View Details</Link>
                    </div>
                </div>
            }
        </div>
    )
}
export default CardItem