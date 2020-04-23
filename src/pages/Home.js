import React, { Component } from 'react'

import Map from '../components/Home/Map';
import Items from '../components/Home/Items'; 


export default class Home extends Component {
    render() {
        return (
            <>
                <Map />
                <Items />
            </>
        )
    }
}
