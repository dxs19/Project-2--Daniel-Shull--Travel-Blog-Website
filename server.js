const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./countries')
const { Image } = require('./images')
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
app.put('/countries', async (req, res) => {
    let updatedCountry = await Country.updateOne(req.body)
    res.json(updatedCountry)
})
//delete country
app.delete('/countries', async (req, res) => {
    let deletedCountry = await Country.deleteOne(req.body)
    res.json(deletedCountry)
})

//Image Routes
//Get
app.get('/images', async (req, res) => {
    let allImages = await Image.find({})
    res.json(allImages)
    res.send('reached images server')
})

app.post('/images', async (req, res) => {
    let createdImage = await Image.create(req.body)
    res.send(createdImage)
})

//update image
app.put('/images', async (req, res) => {
    let updatedImage = await Image.updateOne(req.body)
    res.json(updatedImage)
})
//delete image
app.delete('/images', async (req, res) => {
    let deletedImage = await Image.deleteOne(req.body)
    res.json(deletedImage)
})

app.listen(PORT, () => [
    console.log(`Express server is running:${PORT}`)
])

