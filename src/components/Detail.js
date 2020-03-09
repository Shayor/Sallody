import React from "react"
import AddButton from "./addButton";

function Detail({item}){
    const related_Img = item.related.map(img=><img src={img} />)
    return(
        <div className="row detail">
            <div className="col-md-1 related">
                {related_Img}
            </div>
            <div className="col-md-5">
                <img src={item.url} alt={item.name} />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 detail-Text">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
                <br />
                <AddButton detail={item} />
            </div>
        </div>
    )
}

export default Detail