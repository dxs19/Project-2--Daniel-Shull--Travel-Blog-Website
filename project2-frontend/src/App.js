import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [contries, updateCountries] = useState([])
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
    </div>
  );
}

export default App;
