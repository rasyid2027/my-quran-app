import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Surah extends Component {
    state = {
        surahs: [ ]
    }
    componentDidMount() {
        axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
            .then(res => {
                this.setState({
                    surahs: res.data.data.surahs
                })
            })
    }
    render() {
        const { surahs } = this.state
        const surahList = surahs.length ? (
            surahs.map(surah => {
                return (
                    <div className="surah card grey lighten-4" key={ surah.number }>
                        <div className="card-content">
                            <Link to={'/' + surah.number}>
                                <div className="row">
                                    <div className="col s6">
                                        <span className="card-title">{ surah.englishName }</span>
                                        <span>( { surah.englishNameTranslation } )</span>
                                    </div>
                                    <div className="col s6">
                                        <h5 className='right'>{ surah.name }</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            // <h6 className="center">---</h6>
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
            <div className="container">
                { surahList }
            </div>
        )
    }
}

export default Surah