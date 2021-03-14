import React, { Component } from 'react'
import Band from './Band'

export class Bands extends Component {
    render() {

        const bandCards = this.props.bands.map(band => <Band name={band.name} id={band.id} deleteBand={this.props.deleteBand}/> )

        return (
            <div>
               {bandCards} 
            </div>
        )
    }
}

export default Bands
