import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper teal">
                <div className="container">
                    <a  className="brand-logo">My Qur'an</a>
                    <ul className="right">
                        <li><a href="">Surah</a></li>
                        <li><a href="">Juz</a></li>
                    </ul>
                </div>
            </nav>
            // <div className="container center">
            //     <h2>Bismillahirrohmanirrohim</h2>
            //     <form>
            //         <div className="input-field col s12">
            //             <i className="material-icons prefix">search</i>
            //             <input type="text" id="search" className="validate"/>
            //             <label htmlFor="search">Search Surah</label>
            //         </div>
            //     </form>
            // </div>
        )
    }
}

export default Navbar