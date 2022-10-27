const { Schema } = require('mongoose')

const countrySchema = new Schema(
    {
        name: { type: String, required: true },
        city: { type: String },
        price: { type: String, required: true },
        description: { type: String },
        rating: { type: String, required: true },
        url: { type: String }
    },
    { timestamps: true }
)



module.exports = countrySchema