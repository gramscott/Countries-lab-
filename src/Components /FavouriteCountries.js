import React from "react";



const FavouriteCountries = ({favouriteList}) => {

    if(!favouriteList) {
        return null;
    }

    const list = favouriteList.map((country) => {
        return (<li>{country.name.official}</li>)
    })

    return (
        <>
        <h3>Favorite Countries</h3>
        <ul>
        {list}
        </ul>
        </>
    )

}

export default FavouriteCountries