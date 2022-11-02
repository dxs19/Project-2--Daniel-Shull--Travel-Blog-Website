import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAsyncValue, useParams } from 'react-router-dom'

const CountryDetails = (props) => {
    const [country, setCountry] = useState({})
    let { id } = useParams()
    console.log(id)
    useEffect(() => {
        const detailsCall = async () => {

            await axios.get(`http://localhost:3001/countries/${id}`).then
                ((res) => { setCountry(res.data) })

        }
        detailsCall()
    }, [])

    return (
        <div>
            <h1>This is the details page</h1>
            <h1>{country.city}, {country.name}</h1>
            <img src={country.url} />
            <h2>{country.price}</h2>
            <h3>{country.rating}</h3>
            <h3>{country.description}</h3>
            <h3>{country.rating}</h3>

            <h1></h1>
        </div>
    )
}



export default CountryDetails