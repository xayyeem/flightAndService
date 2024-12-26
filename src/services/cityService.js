const { CityRepository } = require('../repository/index')

class CityService {
    constructor() {
        this.cityRepository = new CityRepository()
    }
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log('something went wrong at service layer')
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId)
            return true
        } catch (error) {
            console.log('something went wrong at service layer')
            throw { error }
        }

    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityrepository.updateCity(cityId, data)
            return city
        } catch (error) {
            console.log('something went wrong at service layer')
            throw { error }
        }
    }

    async getCities(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId)
            return city
        } catch (error) {
            console.log('something went wrong at service layer')
            throw { error }
        }
    }
}

module.exports = CityService