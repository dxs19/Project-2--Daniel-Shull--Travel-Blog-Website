import { useState, useEffect } from 'react'
import axios from 'axios'
import react from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Flags from './Flags'


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
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      })
    updateCountries([...countries, createNewTrip.data])
    setFormState({ name: '', city: '', price: '', description: '', rating: '' })
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home countries={countries} handleChange={handleChange} handleSubmit={handleSubmit} formState={formState} />} />
        <Route path="/flags" element={<Flags />} />

      </Routes>


    </div >
  );
}

export default App;
