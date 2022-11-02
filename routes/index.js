const aControllers = require('../controllers/adult')
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/adults', aControllers.createAdult)

router.get('/adults', aControllers.getAllAdults)

router.get('/adults/:id', aControllers.getAdultById)

router.delete('/adults/:id', aControllers.deleteAdult)

module.exports = router