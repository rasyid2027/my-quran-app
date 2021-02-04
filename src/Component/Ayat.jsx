import React, { Component } from 'react'
import axios from 'axios'

class Ayat extends Component {
    state = {
        ayats: [ ]
    }
    componentDidMount() {
        let id = this.props.match.params.path_id
        axios.get('http://api.alquran.cloud/v1/surah/' + id)
            .then(res => {
                this.setState({
                    ayats: res.data.data.ayahs
                })
            })        
    }
    render() {
        const { ayats } = this.state
        const ayatList = ayats.length ? (
            ayats.map(ayat => {
                return (
                    // <div className="ayat card grey lighten-4" key={ ayat.number }>
                    //     <div className="card-content">
                    //         <p className="right">{ ayat.text }</p>
                    //     </div>
                    // </div>
                    <ul className="collection" key={ ayat.number }>
                        <p className="secondary-content left">( { ayat.numberInSurah } )</p>
                        <li className="collection-item right">
                            { ayat.text }
                        </li>
                    </ul>
                )
            })
        ) : (
            <div className="center">
                <div className="preloader-wrapper medium active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">                                                                                                                                                                                                                                                   
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
        return (
            <div className="ayat container">
                { ayatList }
            </div>
        )
    }
}

export default Ayat