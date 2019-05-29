import React, { Component } from 'react'
import './RestaurantCard.css'
import thumbnail from './../../../Assets/Images/cake.png'

export default class RestaurantCard extends Component {
    render() {
        
        const Cuisines = this.props.rest.Cuisines.map((e)=>(" "+e))
        return (
            <div className="RestaurantCard">
                <div className="RestaurantCard-Image">
                    <img src={thumbnail}  alt="sample image"/>
                </div>

                <div className="RestaurantCard-details">
                    <div className="RestaurantCard-Title">{this.props.rest.Name}</div>
                    <div className="RestaurantCard-Cuisines">
                       {Cuisines.join()}
                    </div>
                    <div className="RestaurantCard-Rating-Distance">
                        <span><i className="fas fa-star"> </i>{this.props.rest.Rating}</span> 
                        <span> <i className="fas fa-map-marker-alt"> </i> {this.props.rest.Distance} kms</span> 
                    </div>

                    <div className="RestaurantCard-Offer">
                        {this.props.rest.Offer}
                    </div>
                </div>
            </div>
        )
    }
}
