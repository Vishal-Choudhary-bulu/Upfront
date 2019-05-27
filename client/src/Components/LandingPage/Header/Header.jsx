import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className = "Header" >

                {/* Note: All the child elements should have a className of the format "Header-yourDecidedName" */}

                {/* here sits the header of the application, basically the thing with that location bar and the links to your account and stuff */}

                {/* no other Component comes in this Component, will have a state which store the location you are looking for a restaurant at */}

                this is the header bar
            </div>
        )
    }
}
