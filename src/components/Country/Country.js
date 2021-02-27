import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {name, population, region, flag, capital} = props.country;
    return (
        <div className='country'>
            <h1>{name}</h1>
            <img src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => props.handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;