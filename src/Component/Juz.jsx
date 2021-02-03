import React, { Component } from 'react'
import axios from 'axios'

class Juz extends Component {
    state = {
        juzs: [ ]
    }
    componentDidMount() {
        axios.get('http://api.alquran.cloud/v1/quran')
            .then(res => {
                console.log(res);
                
            })
    }
    render() {
        return (
            <div className="container center">
                content juz
            </div>
        )
    }
}

export default Juz