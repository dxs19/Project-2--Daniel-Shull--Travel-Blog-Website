import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import App from '../App'

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
        setfilteredData(newFilter)
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
                    return <div className='country-list' href={value.id} key={value.id} target="_blank" >
                        <div className='country-text'>
                            <h2>{value.city}, {value.name}</h2>
                            <h3>Price: {value.price}</h3>
                            <h3>Rating: {value.rating}</h3>
                            <h5>Description: {value.description}</h5>
                        </div>


                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar