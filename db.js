const Pool = require("pg").Pool;

const pool = new Pool({
    user: "benfuller",
    host: "localhost",
    database: "benfuller",
    port: 5432,
});
module.exports = pool;