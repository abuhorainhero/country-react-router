import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    // console.log(props.country)
    const {name, capital} = props.country;
    const countryStyle = {
        border:"1px solid gray",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px"
    }

    return (
        <div style={countryStyle}>
            <h2>Countrie Name : {name} </h2> 
            <p> Capital : {capital} </p>
            <Link to={'/name/'+ name}> <button>Country Details</button> </Link>
        </div>
    );
};

export default Countries;