import React, { Component } from 'react'
import './Header.css'
import logo from '../../../logos/logo.png'
import fav from '../../../logos/Fav-01.png'
import offers from '../../../logos/offers-01.png'
import cart from '../../../logos/shopping-cart.png'
import user from '../../../logos/user.png'

export default class Header extends Component {

    state = {
        location : ''
    }

    handleChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    openSidebar = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    closeSidebar = () => {
        document.getElementById("mySidebar").style.display = 'none';
    }

    render() {     
        return (
            <React.Fragment>
                <div className = "Header" >
                    <nav className="Header-nav" >
                        <div className='Header-logo-form'>
                            <img className="Header-logo" src={logo} alt='Logo'/>
                            <form className='Header-search-form' >
                                <input type="text"  className='Header-location-bar' placeholder=' location' id='location' onChange={this.handleChange}/>
                                <button type="submit" className='Header-location-button'><i className="fas fa-angle-right"></i></button>
                            </form>
                            <div className='Header-menu'>
                                <button onClick={this.openSidebar} className='Header-sidebar-opbtn'><i className="fas fa-bars"></i></button>
                            </div>
                            <ul className="Header-links">
                                <li className="Header-list-item">
                                    <img className= 'Header-offers-icon' src={cart} alt='cart' />
                                    <a href="" className="Header-link">Cart</a>
                                </li>
                                <li className="Header-list-item">
                                    <img className= 'Header-fav-icon' src={fav} alt='fav' />
                                    <a href="" className="Header-link">Favourites</a>
                                </li>
                                <li className="Header-list-item">
                                    <img className= 'Header-offers-icon' src={offers} alt='fav' />
                                    <a href="" className="Header-link">Offers</a>
                                </li>
                                <li className="Header-list-item">
                                    <img className= 'Header-user-icon' src={user} alt='user' />
                                    <a href="" className="Header-link">My Account</a>
                                </li>
                            </ul>
                        </div>   
                    </nav>
                </div>
                <div className='Header-sidebar' id='mySidebar'>                  
                    <ul className="Header-sidebar-links">
                        <li>
                            <button className='Header-sidebar-clbtn' onClick={this.closeSidebar}>&times;</button>
                        </li>
                        <li>
                            <a href="#" className="Header-link">Cart</a>
                        </li>
                        <li>
                            <a href="#" className="Header-link">Favourites</a>
                        </li>
                        <li>
                            <a href="#" className="Header-link">Offers</a>
                        </li>
                        <li>
                            <a href="#" className="Header-link">My Account</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment> 
        )
    }
}
