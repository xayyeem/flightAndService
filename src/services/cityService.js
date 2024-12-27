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

    async updatedCity(cityId, data) {
        try {
            // const city = await this.cityrepository.updateCity(cityId, data)
            const city = await this.cityRepository.updateCity(cityId, data)

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
    async getAll(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({ name: filter.name });
            return cities;
        } catch (error) {
            console.log('Error in service layer while fetching all cities:', error.message);
            throw new Error('Service Error: Unable to fetch cities');
        }
    }

}

module.exports = CityService