const express = require('express');
const { PORT } = require('./config/serverConfig');
const cityRepository = require('./repository/cityRepository');
const apiRoute = require('./routes/index')

const setUpAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', apiRoute);

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

setUpAndStartServer();
