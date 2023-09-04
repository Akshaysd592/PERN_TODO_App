CREATE DATABASE perntodo;
-- implement this code for creating database and table


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)

);

-- \dt => to show tables in database 
-- \c  dbname =>to enter into database