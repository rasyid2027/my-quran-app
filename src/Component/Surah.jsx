import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Surah extends Component {
    state = {
        fullSurah: [ ],
        surahs: [ ]
    }
    componentDidMount() {
        axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
            .then(res => {
                this.setState({
                    fullSurah: res.data.data.surahs,
                    surahs: res.data.data.surahs
                })
            })
    }
    handleSearch = (e) => {
        e.preventDefault()
        const surahs = this.state.fullSurah.filter(fullSurah => {
            return fullSurah.englishName.toLowerCase().match(e.target.value)
        })
        this.setState({
            ...this.state,
            surahs: surahs
        })
    }
    render() {
        const { surahs } = this.state
        const surahList = surahs.length ? (
            surahs.map(surah => {
                return (
                    <div className="card-panel grey lighten-4" key={ surah.number }>
                        <div className="card-content">
                            <Link to={'/' + surah.number}>
                                <div className="row">
                                    <div className="col s6">
                                        <span className="card-title">{ surah.englishName }</span>
                                        <span style={{display: 'block'}}>( { surah.englishNameTranslation } )</span>
                                    </div>
                                    <div className="col s6">
                                        <h6 className='right'>{ surah.name }</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            // <h6 className="center">---</h6>
            <div className="center loading">
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
            <div className="surah container">
                <form>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="search" className="validate" onKeyUp={ this.handleSearch } />
                        <label htmlFor="search">Search Surah</label>
                    </div>
                </form>
                { surahList }
            </div>
        )
    }
}

export default Surah