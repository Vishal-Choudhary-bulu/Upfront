import React, { Component } from 'react'
import './Restaurants.css'
import RestaurantCard from './../RestaurantCard/RestaurantCard'

export default class Reataurants extends Component {

    constructor(props){
        super(props);

        this.state = {
            restaurants : [
                {
                    Name: "Cake Blast",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 5,
                    Distance: 4,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cup Blast",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4.4,
                    Distance: 3.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Coke Blast",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 2.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake shop",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 1,
                    Distance: 0.2,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "pizza Blast",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 3.2,
                    Distance: 1.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "my restaurant",
                    Cuisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 3,
                    Distance: 1.2,
                    Offer: "30% on items above 99"
                }
            ]
        }
    }

    render() {
        const cards = this.state.restaurants.map((rest,key)=>(
            <RestaurantCard rest = {rest}/>
        ))
        return (
            <div className="Restaurants">
                <div className="Restaurants-grid">
                    {cards}
                </div>
            </div>
        )
    }
}
