import React from 'react';
import '../css/items.css'

export default function Item({item}) {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 ">
            <div className="card my-2 item" >
                <img className="card-img-top" src={item.countryInfo.flag} alt="Card image cap" height="200" />
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
