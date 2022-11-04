const { Schema } = require('mongoose')

const imageSchema = new Schema(
    {
        url: { type: String, required: true },
        country: { type: String }

    },
    { timestamps: true }
)

module.exports = imageSchema