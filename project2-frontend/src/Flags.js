import React from "react"
import SearchBar from "./components/SearchBar"
import { useNavigate } from "react-router-dom"

// 
const Flags = (props) => {
    let navigate = useNavigate()

    const showCountry = (props) => {
        navigate(`${props.countries.id}`)

    }
    return (<div>
        <button onClick={props.navigateToHome} className="homepage-button">Back To Homepage</button>
        <h1 className="flag-title">Previously Reviewed Destinations </h1>
        <div >
            <SearchBar placeholder="Enter a destination" data={props.countries} />
        </div>
        <div className="country-card" onClick={() => showCountry(props.countries)} key={props.countries.id}> </div>
    </div>)
}


export default Flags