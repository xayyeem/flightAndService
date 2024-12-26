const { City } = require('../models/index'); // Import the City model

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
        try {
            const city = await City.findByPk(cityId)
            // const city = await City.findone(cityId)
            return city;
        } catch (error) {
            console.log("Error in gettomg:", error.message);
            throw error;
        }
    }
}

module.exports = CityRepository; 
