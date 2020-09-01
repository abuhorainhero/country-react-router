import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Countries from '../Countrys/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    // console.log(countries)
    return (
        <div>
            <h3>This is a list of countries</h3>
            {
                countries.map(country => <Countries
                    key={country.numericCode} country={country}></Countries>)
            }
        </div>
    );
};

export default Home;