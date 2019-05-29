import React, { Component } from 'react'
import './Filters.css'

const cuisines = ['South Indian', 'North Indian','Pizza', 'Fast Food','Desserts', 'Beverages', 'Biriyani'];

const style = {
    fontWeight: '800',
    textDecoration: 'underline'
};

export default class Filters extends Component {
    
    render() {
        
        let jsx = cuisines.map((type,id) => {
            let styleName = "cuisine-tabs";
            if(this.props.activeTab === (id+1)) {
                styleName += " active-tab"
            }
            return (
                <li key = {id} onClick = {() => {this.props.setTab(id+1)}} className = {styleName}>
                    {type}
                </li>
            )
        })
        return (
            <div className="Filters">
                <div className="search-bar-wrapper">
                <input type = "text" value = {this.props.searchValue} onChange = {this.props.handleSearch}  className = "cuisine-search" placeholder='Search'/>
                <i className="fas fa-search icon-search"></i>
                </div>
                <div className="Filters-Cuisines">
                    <span>Cuisines</span>
                </div>
                <div className = "tabs">
                    <ul>
                        {jsx}
                    </ul>
                    </div>
            </div>
        )
    }
}
