const { CityService } = require('../services/index')

const cityService = new CityService()

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            message: 'City created successfully',
            success: true,
            error: {},
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'Failed to create city',
            success: false,
            data: {},
            error: error,
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            message: 'City deleted successfully',
            success: true,
            error: {},
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: 'Failed to create city',
            success: false,
            data: {},
            error: error.message,
        })
    }
}

const get = async (req, res) => {
    try {
        // const response = await cityService.getCity(req.params.id)
        console.log(req.params.id)
        const response = await cityService.getCities(req.params.id)

        return res.status(200).json({
            data: response,
            message: 'City fetched successfully',
            success: true,
            error: {},
        })
    } catch (error) {
        console.log(error.message)
        console.log(error.message)
        res.status(500).json({
            message: 'Failed to get city',
            success: false,
            data: {},
            error: error.message,
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id, req.body)
        return res.status(200).json({
            data: response,
            message: 'City fetched successfully',
            success: true,
            error: {},
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
}