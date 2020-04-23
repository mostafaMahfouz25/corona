import React, { Component } from 'react'
import img from '../../images/1691338-2196f3.svg';
import '../css/map.css';
import {CountryContext} from '../../contexts/CountryContext';

export default class Map extends Component 
{
    render() {
        
        
        return (
            <div className="text-center p-5 cont-img">
                <img src={img} className="img-responsive" />
            </div>
        )
    }
}
