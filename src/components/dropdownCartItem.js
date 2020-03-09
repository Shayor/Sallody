import React from "react"

function DropdownCartItem({detail}){
    return(
        <div>
            <div className="row cartItem">
                <div className="col-md-3">
                    <img src={detail.url} alt={detail.name}/>
                </div>
                <div className="col-md-6">
                    <h4>{detail.name}</h4>
                </div>
                <div className="col-md-3">
                    <h4>{detail.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
                </div>
            </div>
        </div>
    )
}

export default DropdownCartItem