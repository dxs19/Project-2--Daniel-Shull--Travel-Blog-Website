const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Sucessfully connected to MongoDB.')
    })
    .catch((e) => {
        console.log('Connection error', e.messages)
    })

const db = mongoose.connection

module.exports = db