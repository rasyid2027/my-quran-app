import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper teal">
                <div className="container">
                    <a  className="brand-logo">My Qur'an</a>
                    <ul className="right">
                        <li><NavLink exact to="/" activeStyle={{background: '#00867b'}}>Home</NavLink></li>
                        <li><NavLink to="/surah" activeStyle={{background: '#00867b'}}>Surah</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)