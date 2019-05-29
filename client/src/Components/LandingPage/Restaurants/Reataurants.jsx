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
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake Blast",
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake Blast",
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake Blast",
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake Blast",
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                },

                {
                    Name: "Cake Blast",
                    Cusisines: ["Cakes", "Fast Food", "Beverages"],
                    Rating: 4,
                    Distance: 0.7,
                    Offer: "30% on items above 99"
                }
            ]
        }
    }
    render() {
        return (
            <div className="Restaurants">
                <div className="Restaurants-grid">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                </div>
            </div>
        )
    }
}
