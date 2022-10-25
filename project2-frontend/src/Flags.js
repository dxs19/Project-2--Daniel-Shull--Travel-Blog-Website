import React from "react"
import SearchBar from "./components/SearchBar"
const Flags = (props) => {
    return (<div>
        <button onClick={props.navigateToHome}>to homepage</button>
        <h1>Previously Reviewed Destinations </h1>
        <div >
            <SearchBar placeholder="Enter a destination" data={props.countries} />
        </div>
    </div>)
}


export default Flags