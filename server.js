const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./models')
const { Image } = require('./models/images')
const app = express()


//middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/frontend/build`))


//Country Routes
//read all brands ---> GET
app.get('/api/countries', async (req, res) => {
    let allCountries = await Country.find({})
    res.json(allCountries)
})
//git route for single country
app.get('/api/countries/:id', async (req, res) => {
    let country = await Country.findById(req.params.id)
    res.json(country)
})
// create country
app.post('/api/countries', async (req, res) => {
    let createdCountry = await Country.create(req.body)
    res.send(createdCountry)
})

//update country
app.put('/api/countries/:id', async (req, res) => {
    console.log(req.body)
    let updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.json(updatedCountry)
})
//delete country
app.delete('/api/countries/:id', async (req, res) => {
    let deletedCountry = await Country.findByIdAndDelete(req.params.id, req.body)
    res.json(deletedCountry)
})


//Image Routes
//Get
app.get('/api/images', async (req, res) => {
    let allImages = await Image.find({})
    res.json(allImages)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/frontend/build/index.html`)
})

app.listen(PORT, () => [
    console.log(`Express server is running:${PORT}`)
])