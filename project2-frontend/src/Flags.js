import React from "react"
import SearchBar from "./components/SearchBar"
const Flags = (props) => {

    return (<div>
        <button onClick={props.navigateToHome}>to homepage</button>
        <h1>this is where the countries will be </h1>
        <div >
            <SearchBar placeholder="Enter a destination" data={props.countries} />
        </div>

        {/* {
            props.countries.map((country) => (
                <div key={country._id} class="country-list">
                    <h2>{country.city},{country.name}</h2>
                </div>
            ))
        } */}

    </div>)
}


export default Flags