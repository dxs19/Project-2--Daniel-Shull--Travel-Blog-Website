import React from "react"
import { useNavigate } from "react-router-dom"
const Home = (props) => {
    return (<div >

        <button onClick={props.navigateToFlags}
        ></button>
        <h1>Write your experience here.</h1>
        {props.countries.map((country) => (
            <div key={country._id}>
                <h2>{country.city},{country.name}</h2>
                <h3>{country.price}</h3>
                <h3>{country.description}</h3>
                <h3>{country.rating}</h3>
            </div>
        ))}
        <h3>Add Another Trip:</h3>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='name'>Country Name:</label>
            <input id='name' value={props.formState.name} onChange={props.handleChange} />
            <label htmlFor='city'>City:</label>
            <input id='city' value={props.formState.city} onChange={props.handleChange} />
            <label htmlFor='price'>Price of Trip:</label>
            <input id='price' value={props.formState.price} onChange={props.handleChange} />
            <label htmlFor='description'>Description of Trip:</label>
            <input id='description' value={props.formState.description} onChange={props.handleChange} />
            <label htmlFor='rating'>Rating:</label>
            <input id='rating' value={props.formState.rating} onChange={props.handleChange} />
            <button type='submit'>Add Trip</button>
        </form>
    </div >
    )
}

export default Home