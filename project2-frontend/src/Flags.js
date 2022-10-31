import React from "react"
import SearchBar from "./components/SearchBar"
import { useNavigate, Route, Routes } from "react-router-dom"
import App from "./App.js"



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
            <button onClick={props.navigateToDetails} name='to-details' ></button>
            <Routes><Route path="/flags/:id"></Route></Routes>
        </div>

    </div>)
}


export default Flags