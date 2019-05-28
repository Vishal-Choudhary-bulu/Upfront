import React, { Component } from 'react'
import './Restaurants.css'
import RestaurantCard from './../RestaurantCard/RestaurantCard'

export default class Restaurants extends Component {
    render() {
        return (
            <div className="Restaurants">
                Here comes Restaurants
                {/* Note: All the child elements should have a className of the format "Restaurants-yourDecidedName" */}

                {/* the Restaurant cards after being filtered shall appear here */}

                {/* has state sttoring all the restaurats matching the filter and changing according to the change in filters */}
                
                <RestaurantCard />

            </div>
        )
    }
}
