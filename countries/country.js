const { Schema } = require('mongoose')

const countrySchema = new Schema(
    {
        name: { type: String, required: true },
        city: { type: String },
        price: { type: String, required: true },
        rating: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = countrySchema