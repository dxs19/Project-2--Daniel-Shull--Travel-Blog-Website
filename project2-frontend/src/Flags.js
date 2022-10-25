import React from "react"
const Flags = (props) => {

    return (<div>
        <button onClick={props.navigateToHome}>to homepage</button>
        <h1>this is where the countries will be </h1>
        {props.CountryList.map((country) => (
            <div key={country.name} class="countries">
                <h2>{country.name}</h2>
                {/* <h2>{country.cities}</h2> */}
            </div>
            // console.log(props.CountryList)
        ))}
        {
            props.countries.map((country) => (
                <div key={country._id} class="country-list">
                    <h2>{country.city},{country.name}</h2>
                    {/* <h3>{country.price}</h3>
                    <h3>{country.description}</h3>
                    <h3>{country.rating}</h3> */}
                </div>
            ))
        }

    </div>)
}


export default Flags