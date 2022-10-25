import React, { useState } from 'react'
import './SearchBar.css'
import App from '../App'

function SearchBar({ placeholder, data, props }) {


    const [filteredData, setfilteredData] = useState([])
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())

        })
        setfilteredData(newFilter)
    }
    return (
        <div className='search'>
            <div className="searchInputs"> </div>
            <div className='dataResults'>
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className='Search Icon'>
                    {/* */}
                </div>
            </div>
            <div className='dataResults'>
                {filteredData.map((value, key) => {
                    return <div className='country-list' href={value.id} key={value.id} target="_blank" >
                        <div class name="country-list">{value.name}, {value.city}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar