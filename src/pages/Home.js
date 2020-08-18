import React, {useContext} from "react"
import {Context} from "../Context/AppContext"
import CardItem from "../components/cardItem"

function Home(){
    const {dataItems} = useContext(Context)
    // console.log(dataItems)
const checking = dataItems.map(item=> item.isTrending && <CardItem key={item.id} detail={item}/>)
    return(
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>SALLODY STORE</h5>
                            <h2>
                                Trending Fashion Everywhere You Go
                            </h2>
                            <h6>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates quas aperiam amet eos eius
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptates quas aperiam amet eos eius
                            </h6><br/>
                            <div className="button"><button className="button-primary">SHOP NOW</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container trending">
                <h2>Trending Collections</h2>
                <div className="row">
                    {checking}
                </div>
            </div>
        </div>
    )
}

export default Home