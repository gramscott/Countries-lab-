import React, {useState, useEffect} from "react";
import CountriesSelector from "../Components /CountriesSelector";
import Country from "../Components /Country";
import FavouriteCountries from "../Components /FavouriteCountries";


const CountriesContainer = () => {

    const[countries, setCountries] = useState ([])
    const[isLoading, setIsLoading] = useState(true)
    const[selectedCountry, setSelectedCountry] = useState("")
    const[favouriteCountries, setFavouriteCountries] = useState("")


    useEffect(() => {
        getCountries();
    }, [])

    const handleCountrySelected = (countryCode) => {
        setSelectedCountry (countryCode);
    }

    const handleFavouriteClick = (country) => {
        const copyFavoriteCountries = [...favouriteCountries]
        copyFavoriteCountries.push(country)
        setFavouriteCountries(copyFavoriteCountries)
    }
    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
        .then(()=> setIsLoading(false))
        .then(totalPopulation)
    }

    let total = 0;

    const totalPopulation = countries.map((country) => {
        total = total + country.population;
    })

    const selectedCountryObject = countries.find(country => country.cca3 === selectedCountry)
    
    return (
        <>
        <h1>Countries</h1>
        <p>Total Population: {total}</p>
        {!isLoading ? <CountriesSelector countries={countries}handleCountrySelected={handleCountrySelected}/> : <h1>Loading</h1>}
        {!isLoading ? <Country selectedCountry={selectedCountryObject} handleFavouriteClick={handleFavouriteClick}/> : null}
        <FavouriteCountries favouriteList={favouriteCountries}/>
        </>
    )
}

export default CountriesContainer