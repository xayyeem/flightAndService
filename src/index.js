const express = require('express');
const { PORT } = require('./config/serverConfig');
const cityRepository = require('./repository/cityRepository');

const setUpAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        const repo = new cityRepository()
        await repo.deleteCity(1)
    });
};

setUpAndStartServer();
