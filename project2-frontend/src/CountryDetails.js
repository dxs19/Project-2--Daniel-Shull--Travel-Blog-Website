import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = (props) => {
    const [countries, setCountry] = useState('')
    let { id } = useParams()
    useEffect(() => {
        let selectedBoat = props.countries.find(
            countries => countries.id === parseInt(id)
        )
        setCountry(selectedBoat)
    }, [props.countries, id])

    // const [country, setCountry] = useState('')
    // useEffect(() => {

    // }, [])
}
// let { id } = useParams()
// useEffect(props) => {
//     let selectedCountry = props.boat.find(
//         (countries) => country.id === parseInt(id)
//     )
//     setBoat(selectedBoat)
// }, [props.countries, id]

// )


export default CountryDetails