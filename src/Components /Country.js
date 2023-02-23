import React from "react";
import FavouriteCountries from "./FavouriteCountries";

const Country = ({selectedCountry, handleFavouriteClick}) => {

    if(!selectedCountry) {
        return null
    }

    const handleClick = () => {
        handleFavouriteClick(selectedCountry)
    }

    return (
        <>
        <h2>Name: {selectedCountry.name.official}</h2>
        <h3>Capital: {selectedCountry.capital[0]}</h3>
        <button onClick={handleClick}> Add to Favourites</button>
        </>
    )
}


export default Country