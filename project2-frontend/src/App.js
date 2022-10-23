import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, updateCountries] = useState([])


  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      updateCountries(response.data)

    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Write your experience here.</h1>
      {countries.map((country) => (
        <div key={country._id}>
          <h2>{country.name} </h2>
        </div>
      ))}
      <h3>Add Another Trip</h3>
    </div>
  );
}

export default App;
