const Adult = require('../models/adult')
const router = require('../routes')

const createAdult = async (req, res) => {
    try {
        const adult = await new Adult(req.body)
        await adult.save()
        return res.status(201).json({
            adult
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllAdults = async (req, res) => {
    try {
        const adults = await Adult.find()
        return res.status(200).json({ adults })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAdultById = async (req, res) => {
    try {
        const { id } = req.params
        const adult = await Adult.findById(id)
        if (adult) {
            return res.status(200).json({ adult })
        }
        return res.status(404).send('Adult with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteAdult = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Adult.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Adult deleted')
        }
        throw new Error('Adult not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createAdult,
    getAllAdults,
    getAdultById,
    deleteAdult
}
