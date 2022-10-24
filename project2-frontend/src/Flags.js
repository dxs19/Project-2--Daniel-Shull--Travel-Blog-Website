import React from "react"
import CountryList from "./CountryList"
const Flags = (props) => {
    console.log(CountryList)
    return (<div>
        <button onClick={props.navigateToHome}>to homepage</button>
        <h1>this is where the countries will be </h1>

        {props.CountryList.map((country) => {
            <div key={country.name}>
                <h2>{country.name}</h2>
                {/* <h2>{country.cities}</h2> */}
            </div>
        })}
        {/* {props.CountryList.map((country) => (
            <div key={country.name}>
                <h2>{country.name}</h2>
            </div>) */}
    </div>)
}









export default Flags