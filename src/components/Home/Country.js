import React, { Component } from 'react'

export default class Country extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="col-sm-12 ">
                <div className="card my-2 item " >
                    <img className="card-img-top" src={item.countryInfo.flag} alt="Card image cap" height="200" style={{width:"250px !important"}} />
                    <div className="card-body">
                        <h3 className="card-title">{item.country}</h3>
                        <div className="card-text">
                            <h5 className="py-2 border-bottom"> All Casses : <span className="badge badge-info float-right">{item.cases}</span> </h5>
                            <h5 className="py-2 border-bottom"> Today Casses : <span className="badge badge-warning float-right">{item.todayCases}</span> </h5>
                            <h5 className="py-2 border-bottom"> Today Deaths : <span className="badge badge-danger float-right">{item.todayDeaths}</span> </h5>
                            <h5 className="py-2 border-bottom"> Recovered : <span className="badge badge-success float-right">{item.recovered}</span> </h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
