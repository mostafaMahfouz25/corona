import React, { Component } from 'react';
import {CountryContext} from '../contexts/CountryContext';


export default class Form extends Component 
{
    static contextType = CountryContext;

    render() {
        const {getCountryData,countryName,handleChange} = this.context;

        return (
            <form className="p-5 my-2 border" onSubmit={getCountryData}> 
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-4 text-center">Search By Country Name</h2>
                    </div>
                    <div className="col-sm-9 col-xs-12 my-2">
                        <input type="text" className="form-control" name="countryName" onChange={handleChange}  value={countryName} placeholder="Country Name"  />
                    </div>
                    <div className="col-sm-3 col-xs-12  my-2">
                        <input type="submit" className="form-control btn btn-primary" value="Get Data" />
                    </div>
                </div>
            </form>
        )
    }
}
