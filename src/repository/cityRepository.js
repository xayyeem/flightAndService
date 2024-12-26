const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: { id: cityId }
            });
            return true;
        } catch (error) {
            console.log("Error in deleteCity:", error.message);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Error in updating:", error.message);
            throw error;
        }
    }

    async getCity(cityId) {
        // const city = await City.find(cityId);
        // Alternative approach:
        const city = await City.findByPk(cityId);
        if (!city) {
            throw new Error(`City with ID ${cityId} not found`);
        }

        return city;

    }

}

module.exports = CityRepository; 
