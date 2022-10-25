import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ placeholder, data }) {


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
                    return <a className='dataItem' key={value.id} >
                        <p>{value.name} , {value.city}</p>
                    </a>
                })}
            </div>
        </div>
    )
}

export default SearchBar