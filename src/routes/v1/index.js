const express = require('express')
const cityController = require('../../controllers/cityController')

const router = express.Router()


router.post('/city', cityController.create)
router.delete('/city/:id', cityController.destroy)
router.get('/city/:id', cityController.get)
router.patch('/city/:id', cityController.update)
router.get('/allCity', cityController.getAllCities)

module.exports = router