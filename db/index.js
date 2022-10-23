const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://dxs19:stella@cluster0.exiesoz.mongodb.net/project2')
    .then(() => {
        console.log('Sucessfully connected to MongoDB.')
    })
    .catch((e) => {
        console.log('Connection error', e.messages)
    })

const db = mongoose.connection

module.exports = db