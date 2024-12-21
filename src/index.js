const express = require('express');
const { PORT } = require('./config/serverConfig');
const cityRepository = require('./repository/cityRepository');

const setUpAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        const data = {
            name: "lolopolo"
        };

        try {
            const city = await cityRepository.createCity(data);
        } catch (error) {
            console.log( error);
        }
    });
};

setUpAndStartServer();
