import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    }, []);
    const {name, capital, nativeName, area, flag} = country; 
    // console.log(country);

    return (
        <div style={{textAlign: 'center'}}>
            <h1>The country details </h1>
            <img style={{width: "200px", height: "200px"}} src={flag} alt=""/>
            <h3> Name: {name} </h3>
            <h4>NativeName: {nativeName}</h4>
            <p> Capital: {capital}</p>
            <p>Area : <b>{area}</b></p>
        </div>
    );
};

export default CountryDetail;