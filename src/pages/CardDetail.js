import React, { useContext } from "react"
import {useParams} from "react-router-dom"
import {Context} from "../Context/AppContext"
import Detail from "../components/Detail"

function CardDetail(props){
    const {cardId} = useParams();
    const {dataItems} = useContext(Context)
    const cardDetail = dataItems.find(data=>data.id===cardId)
    
    return(
        <div className="container">
            <Detail item={cardDetail}/>
        </div>
    )
}
export default CardDetail