import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper teal">
                        <div className="container">
                            <a  className="brand-logo">My Qur'an</a>
                            <ul className="right">
                                <li><NavLink exact to="/" activeStyle={{background: '#00867b'}}>Home</NavLink></li>
                                <li><NavLink to="/surah" activeStyle={{background: '#00867b'}}>Surah</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)