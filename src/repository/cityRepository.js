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

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: { id: cityId }
            });
        } catch (error) {
            console.log("Error in deleteCity:", error.message);
            throw error;
        }
    }
}

module.exports = new CityRepository(); // Ensure it's exported as an instance
