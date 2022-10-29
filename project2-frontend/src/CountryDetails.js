import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = (props) => {
    const [country, setCountry] = useState('')
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        let selectedBoat = props.countries.find(
            (country) => country.id === parseInt(id)
        )
        setCountry(selectedBoat)
    }, [props.countries, id])
    return (
        <h1>This is the details page</h1>
    )
}



export default CountryDetails