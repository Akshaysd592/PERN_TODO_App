// to make database connection with server  


const Pool = require("pg").Pool;

const pool = new Pool({
    user :"database_user", // insert database name
    password:"database_password", // insert database password
    host:"localhost",
    port:5432,
    database:"database_Name" // insert database name
});

module.exports = pool;