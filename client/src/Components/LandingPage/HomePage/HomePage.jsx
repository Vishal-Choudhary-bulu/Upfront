import React from 'react'
import './HomePage.css'
import Header from './../Header/Header'
import Filters from './../Filters/Filters'
import Restaurants from './../Restaurants/Reataurants'

const HomePage = ()=>{
    return(
        <div className="HomePage">
            <Header />
            <Filters />
            <Restaurants />
        </div>
    )
}

export default HomePage;