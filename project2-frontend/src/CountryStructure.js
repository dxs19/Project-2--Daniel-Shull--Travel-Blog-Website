
const countryFlag = (props) => {

    return (
        <li className="country" id={props.name}>
            <div className="country-info">
                <h3>Country: {props.name}</h3>
                <h5>Cities: {props.cities} </h5>
                <h5> Average Rating: {props.rating}</h5>
            </div>
        </li>
    )
}

export default countryFlag