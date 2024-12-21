# mysql2 
- sequalize ko mysql k sath connect karne k liye

step 1 - npx sequelize init - isse config/config.json create hoga (isse config/config.json, migration, models, seeders folder create ho jaynege ). should be out of src folder as it will override everything 
step 2 - npx sequelize db:create it will create database for us
step 3 - npx sequelize model:generate --name <model Name> --attributes name:String (it will create a model (containing js classes that is not synced with our database) and migration (help us to make incremental changes in our tables) for us )  
step4 - npx sequelize db:migrate -  execute migration files and apply changes to the database schema.
        - npx sequelize db:migrate:undo - rollback the migration
        - changes made in models are made in javascript level
        - change made in migration files are database level