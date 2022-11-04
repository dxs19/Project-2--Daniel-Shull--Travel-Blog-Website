import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAsyncValue, useParams } from 'react-router-dom'

const CountryDetails = (props) => {
    const [country, setCountry] = useState({})
    let { id } = useParams()
    console.log(id)
    useEffect(() => {
        const detailsCall = async () => {

            await axios.get(`/api/countries/${id}`).then
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
            <h3>{country.description}</h3>
            <h3>{country.rating}</h3>
            <div>
                <form onSubmit={(event) => { props.handleUpdate(event, country._id) }} class="labels">
                    <label htmlFor='name'>Country Name:</label>
                    <input id='name' value={props.formState.name} onChange={props.handleChange} />
                    <label htmlFor='city'>City:</label>
                    <input id='city' value={props.formState.city} onChange={props.handleChange} />
                    <label htmlFor='price'>Price of Trip:</label>
                    <input id='price' value={props.formState.price} onChange={props.handleChange} />
                    <label htmlFor='description'>Description of Trip:</label>
                    <input id='description' class="description" value={props.formState.description} onChange={props.handleChange} />
                    <label htmlFor='rating'>Rating:</label>
                    <input id='rating' value={props.formState.rating} onChange={props.handleChange} />
                    <label htmlFor='url'>Image:</label>
                    <input id='url' value={props.formState.url} onChange={props.handleChange} />
                    <button type='submit' class="trip-button">Update Trip</button>
                </form>
                <button onClick={() => props.handleDelete(country._id)} className="delete-btn"> Delete</button>
            </div>
        </div>
    )
}



export default CountryDetails