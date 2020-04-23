import React, { Component } from 'react'
import Axios from 'axios';
const CountryContext = React.createContext();

class CountryProvider extends Component {
    
    state = {
        allCases:[],
        homeCases:[],
        country:[],
        countryName:'',
        loading:false
    }

    componentDidMount = ()=>
    {
        Axios.get("https://corona.lmao.ninja/v2/countries")
            .then(data=>
                {
                    this.setState({allCases:data.data})
                    const allData = data.data;
                    const topCountries = allData.sort(function(a, b){return b.cases - a.cases}).slice(0, 10);
                    this.setState({homeCases:topCountries,loading:true})
                    // console.log(this.state.homeCases)
                })
            .catch(err=>console.log(err))
        this.getUpdatedData();
    }

    getUpdatedData = ()=>{
        setInterval(() => {
            Axios.get("https://corona.lmao.ninja/v2/countries")
            .then(data=>
                {
                    const topCountries = data.data.sort(function(a, b){return b.cases - a.cases}).splice(0, 10);
                    this.setState({allCases:data.data,homeCases:topCountries,loading:true})
                    // console.log(this.state.homeCases)
                })
            .catch(err=>console.log(err))
        }, 300000);
    }

    getCountryData = (e)=>
    {
        e.preventDefault();
        const setData = async ()=>
        {
            let obj = await this.state.allCases.filter((item)=>item.country===this.state.countryName);
            this.setState({country:obj})
        }
        setData();


    }
    handleChange = (e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }



    render() {
        return (
           <CountryContext.Provider value={{...this.state,getCountryData:this.getCountryData,handleChange:this.handleChange}}>
               {this.props.children}
           </CountryContext.Provider>
        )
    }
}

export {CountryContext,CountryProvider};
