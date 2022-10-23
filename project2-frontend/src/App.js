import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, updateCountries] = useState([])
  const [formState, setFormState] = useState({ name: '', city: '', price: '', description: '', rating: '' })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)

    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let createNewTrip = await axios.post('http://localhost:3001/countries', formState)
  }
  return (
    <div className="App">
      <h1>Write your experience here.</h1>
      {countries.map((country) => (
        <div key={country._id}>
          <h2>{country.name} </h2>
        </div>
      ))}
      <h3>Add Another Trip:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Country Name:</label>
        <input id='name' value={formState.name} onChange={handleChange} />
        <label htmlFor='city'>City:</label>
        <input id='city' value={formState.city} onChange={handleChange} />
        <label htmlFor='price'>Price of Trip:</label>
        <input id='price' value={formState.price} onChange={handleChange} />
        <label htmlFor='description'>Description of Trip:</label>
        <input id='description' value={formState.description} onChange={handleChange} />
        <label htmlFor='rating'>Rating:</label>
        <input id='rating' value={formState.rating} onChange={handleChange} />
        <button type='submit'>Add Trip</button>
      </form>
    </div>
  );
}

export default App;
