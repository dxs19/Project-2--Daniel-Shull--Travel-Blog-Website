import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Flags from './Flags'
import CountryList from './CountryList'
import SearchBar from './components/SearchBar'

// import Pictures from './components/Pictures'



function App() {
  const [countries, updateCountries] = useState([])
  const [formState, setFormState] = useState({ name: '', city: '', price: '', description: '', rating: '', url: '' })
  const [id, setID] = useState(null)
  const navigate = useNavigate()

  const navigateToFlags = () => {
    navigate('/flags')
  }
  const navigateToHome = () => {
    navigate('/')
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.put('http://localhost:3001/countries')
      setID(response.data)

    }
    apiCall()
  }, [])

  //   setID(localStorage.getItem('_id'))
  // }, [])
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

  // const setData = (data) => {
  //   console.log(data)
  //   handleSubmit = () => setData(data)
  // }




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
    setFormState({ name: '', city: '', price: '', description: '', rating: '', image: '' })
  }
  const handleSubmit2 = async (event) => {
    event.preventDefault()
    console.log(formState)
    let updateTrip = await axios.put('http://localhost:3001/countries', formState)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      })
    updateCountries([...countries, updateTrip.data])
    setFormState({ name: '', city: '', price: '', description: '', rating: '', image: '' })


    ////Deleting////
    const getData = () => {
      axios.get(`http://localhost:3001/countries`)
        .then((getData) => {
          setAPIData(getData.data);
        })
    }
    const onDelete = (id) => {
      axios.delete(`http://localhost:3001/countries/${id}`)
        .then(() => {
          getData();
        })
    }


  }

  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={<Home
            countries={countries}
            // setData={setData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSubmit2={handleSubmit2}
            formState={formState}
            navigate={navigate}
            navigateToFlags={navigateToFlags}
            navigateToHome={navigateToHome}
            SearchBar={SearchBar} />} />
        <Route path="/flags"
          element={<Flags
            navigateToHome={navigateToHome}
            CountryList={CountryList}
            countries={countries}
            SearchBar={SearchBar} />} />

      </Routes>


    </div >
  );
}

export default App;
