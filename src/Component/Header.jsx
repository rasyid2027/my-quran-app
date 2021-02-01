import React, { Component } from 'react'
import Basmalah from '../bismillah.svg'

class Header extends Component {
    render() {
        return (
            <div className="header container center">
                <img src={ Basmalah } alt="basmalah"/>
                <form>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="search" className="validate"/>
                        <label htmlFor="search">Search Surah</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Header