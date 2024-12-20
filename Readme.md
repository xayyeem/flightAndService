# Welcome to flight Services

# Project Setup

    - clone the project on your local
    - Execute `npm install` on your same path as of your root dir of download project
    - create a `.env` file in the root directory and add the following environment variables
        - `PORT = 3000`
    - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

    ```
     {

    "development": {
    "username": "<Your DB Login>",
    "password": "<Your password here>",
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
        }
     }

    ```
    - once you have added your db config as listed above, go to the src folder from terminal `npx sequelize db:create`
