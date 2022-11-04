import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Flags from './Flags'
import CountryList from './CountryList'
import SearchBar from './components/SearchBar'
import { useParams } from 'react-router-dom'
import CountryDetails from './CountryDetails'
// import { index } from './countries/country'





function App() {
  const [countries, updateCountries] = useState([])
  const [images, getImages] = useState([])
  const [formState, setFormState] = useState({ name: '', city: '', price: '', description: '', rating: '', url: '' })
  let { id } = useParams()
  let navigate = useNavigate()

  const navigateToFlags = () => {
    navigate('/flags')
  }
  const navigateToHome = () => {
    navigate('/')
  }
  const getTripDetails = (id) => {
    navigate(`/flags/${id}`)
  }







  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/countries`)
      updateCountries(response.data)

    }
    apiCall()
  }, [])

  useEffect(() => {
    const imageCall = async () => {
      let response = await axios.get('http://localhost:3001/images')
      console.log(response.data)
      getImages(response.data)
    }
    imageCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let createNewTrip = await axios.post(`http://localhost:3001/countries`, formState)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      })
    updateCountries([...countries, createNewTrip.data])
    setFormState({ name: '', city: '', price: '', description: '', rating: '', url: '' })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/countries/${id}`)
    navigate('/')
  }
  const handleUpdate = async (event, id) => {
    event.preventDefault()
    let response = await axios.put(`http://localhost:3001/countries/${id}`, formState)
    updateCountries([countries, response])
    setFormState({ name: '', city: '', price: '', description: '', rating: '', url: '' })
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={<Home
            countries={countries}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formState={formState}
            navigate={navigate}
            navigateToFlags={navigateToFlags}
            navigateToHome={navigateToHome}
            SearchBar={SearchBar}
            handleUpdate={handleUpdate}
          />} />
        <Route path="/flags"
          element={<Flags
            navigateToHome={navigateToHome}
            CountryList={CountryList}
            countries={countries}
            SearchBar={SearchBar} />} />
        <Route path="/flags/:id"
          element={<CountryDetails
            countries={countries}
            handleUpdate={handleUpdate}
            formState={formState}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />} />
      </Routes>


    </div >
  );
}

export default App;
