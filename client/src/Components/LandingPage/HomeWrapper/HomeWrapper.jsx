import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import Restaurants from '../Restaurants/Reataurants';

class HomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            activeTab: 1
        }
        this.handleChange = (e) => {
            this.setState({
                search: e.target.value
            });
        }
        this.setTab = (num) => {
            this.setState({
                activeTab: num
            });
        }
    }
    render() {
        return (
            <div>
                <Filters handleSearch = {this.handleChange} setTab = {this.setTab} searchValue = {this.state.search} activeTab = {this.state.activeTab}/>
                <Restaurants filters = {this.state} />
            </div>
        );
    }
}

export default HomeWrapper;