import React from "react"
import SearchBar from "./components/SearchBar"
const Flags = (props) => {
    // class SearchBar extends React.Component {
    //     constructor() {
    //         super()
    //         this.state = {
    //             countries
    //         }
    //     }

    return (<div>
        <button onClick={props.navigateToHome}>to homepage</button>
        <h1>this is where the countries will be </h1>
        <div >
            <SearchBar placeholder="Enter a destination" data={props.countries} />
        </div>
    </div>)
}


export default Flags