import React, { Component } from 'react'
import './RestaurantCard.css'
import thumbnail from './../../../logos/logo.png'

export default class RestaurantCard extends Component {
    render() {
        return (
            <div className="RestaurantCard">
                <div className="RestaurantCard-Image">
                    <img src={thumbnail}  alt="sample image"/>
                </div>

                <div className="RestaurantCard-details">
                    <div className="RestaurantCard-Title">CAKE BLAST</div>
                    <div className="RestaurantCard-Cuisines">
                        Cakes, fast-food, unhealthy
                    </div>
                    <div className="RestaurantCard-Rating-Distance">
                        <span><i className="fas fa-star"></i> 4</span> 
                        <span> <i className="fas fa-map-marker-alt"></i> 0.7</span> 
                    </div>

                    <div className="RestaurantCard-Offer">
                        30% off on orders above 99
                    </div>
                </div>
            </div>
        )
    }
}
