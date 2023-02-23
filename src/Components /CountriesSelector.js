import React from "react";

const CountriesSelector = ({countries, handleCountrySelected}) => {

    const handleChange = (event) => {
        console.log(event.target.value)
        handleCountrySelected(event.target.value)
    }
    return (
        <>
        <select onChange={handleChange}>
            <option>Choose a country</option>
        {countries.map((country) =>{
                return (
                    <option key={country.cca3} value={country.cca3}>{country.name.official}</option>
                )
            })
        }

        </select>
        </>

    )
}
export default CountriesSelector