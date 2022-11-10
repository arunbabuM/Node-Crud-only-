const {Client} = require('pg');

const client = new Client({
    host :"localhost",
    user:"postgres",
    port: 5433,
    password : "ROOT",
    database : "crud"

})

// const client = new Client({
//     host :"localhost",
//     user:"postgres",
//     port: 5432,
//     password : "root",
//     database : "crud"

// })

module.exports = {client}