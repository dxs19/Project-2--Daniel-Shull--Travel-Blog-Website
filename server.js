const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./countries')
const app = express()

app.get('/', (req, res) => {
    res.send({ msg: "This route is being hit" })
})
//middleware
app.use(express.json())
app.use(cors())


//Country Routes
//read all brands ---> GET
app.get('/countries', async (req, res) => {
    let allCountries = await Country.find({})
    res.json(allCountries)
})

// create country
app.post('/countries', async (req, res) => {
    let createdCountry = await Country.create(req.body)
    res.send(createdCountry)
})

//update country

//delete country




app.listen(PORT, () => [
    console.log(`Express server is running:${PORT}`)
])



