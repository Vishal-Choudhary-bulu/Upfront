import React from 'react'
import './HomePage.css'
import Header from './../Header/Header'
import HomeWrapper from '../HomeWrapper/HomeWrapper';

const HomePage = ()=>{
    return(
        <div className="HomePage">
            <Header /><br/>
            <HomeWrapper />
        </div>
    )
}

export default HomePage;