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

## Db Design
    - Airplane table
    - flight table
    - Airport table
    - City table

### Airplane table
    - id
    - model_number
    - capacity
    - created_at
    - updated_at
        
        
        |
        1:N
        |
        down

### Flight tables   <----------------            
    - id                            |
    - Departure_City_id             |        
    - Destination_City_id           |
    - Airplane_id                   |
    - arrival                       |
    - departure                     |
    - Airport_id                    |        
                                    |
### City tables                     |    
    - id                            1:N
    - name
    - created at                    |
    - updated at                    |
                                    |
        |                           |
        1:N                         |
        |                           |    
        down                        |
                                    |
### Airport table -------------------                   
    - id
    - name
    - city_id
    - Address

- A flight belongs to an airplane but one airplane can be used to multiple flights
- A city has many airport but one airport belongs to a city 
- One airport can have multiple flight, but a flight belong to one airport  

