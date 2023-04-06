import React from 'react'
import { useLocation } from "react-router-dom";
function Product() {
    const location = useLocation();
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 border">
                    <img src={location.state.image} alt="" width="100%" height="300px"/>
                </div>
                <div className="col-lg-6">
                    <h3>{location.state.title}</h3>
                    <p>{location.state.description}</p>
                    <p><span><b>price:</b>{location.state.price}</span>      <span><b>discount</b>:{location.state.discountPercentage}%</span></p>

                </div>
            </div>
        </div>
   
    )
}

export default Product
