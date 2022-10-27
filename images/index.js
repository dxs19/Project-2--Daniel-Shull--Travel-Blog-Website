const mongoose = require('mongoose')
const imageSchema = require('./images')

const Image = mongoose.model('Image', imageSchema)

module.exports = {
    Image
}