import React, { Component } from 'react';
import Item from './Item';
import Form from '../Form';
import {CountryContext} from '../../contexts/CountryContext';
import Country from './Country';

export default class Items extends Component 
{

    static contextType = CountryContext;

    showItems= (data)=>{

        return data.map((item,index)=>{
            return <Item item={item} key={index} />
        })
    }
    render() {

        const {homeCases,loading,country} = this.context;
        // console.log(homeCases)

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Form />
                    </div>
                    {
                        country.length ? <Country item={country[0]} /> :''
                    }
                    <div className="col-sm-12">
                        <h2 className="py-3 border-bottom text-center">Top 10 Countries Now </h2>
                    </div>
                    {
                        loading ? this.showItems(homeCases) : ''
                    }
                    
                </div>
            </div>
        )
    }
}
