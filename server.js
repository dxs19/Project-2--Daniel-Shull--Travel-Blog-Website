const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./countries')
const app = express()

app.get('/', (req, res) => {
    res.send({ msg: "This route is being hit" })
})
//middleware
app.use(express.json())

//Country Routes

// create country
app.post('/countries', async (req, res) => {
    let createdCountry = await Country.create(req.body)
    res.send(createdCountry)
})

app.listen(PORT, () => [
    console.log(`Express server is running:${PORT}`)
])