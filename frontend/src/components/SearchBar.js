import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import App from '../App'
import { useNavigate } from 'react-router-dom'

function SearchBar({ placeholder, data }) {


    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
        setfilteredData(data)
    }, data)


    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return (value.name.toLowerCase().includes(searchWord.toLowerCase())
            )

        })

    }
    let navigate = useNavigate()

    const showCountry = (id) => {
        navigate(`${id}`)
    }
    return (

        <div className='search'>
            <div className="searchInputs"> </div>
            <div className='dataResults'>
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className='Search Icon'>
                </div>
            </div>
            <div className='dataResults'>
                {filteredData.map((value, key) => {
                    return <div onClick={() => showCountry(value._id)} className='country-list' key={value._id} target="_blank" >
                        <div className='country-text'>
                            <h2>{value.city}, {value.name}</h2>
                            <h3>Price: {value.price}</h3>
                            <h3>Rating: {value.rating}</h3>
                            <h5>Description: {value.description}</h5>
                            <img src={value.url} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar