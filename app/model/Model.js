const {client} = require("../config/DB.js");



module.exports = class Model{
 
    static getAllData() {
        return  client.query('select * from users');
    } 

    static getUserById(id) {
        return client.query("SELECT * FROM users WHERE id = $1",[id]);
    }

    static insertUser(users){
        return client.query('insert into users (name,age,city) values ($1,$2,$3)',[users.name,Number.parseInt(users.age),users.city]);
    } 

    static updateUser(users){
        console.log("UPDATE <><><><><><<", users.name, users.id, users.age, users.city);
        return client.query('UPDATE users SET name=$1,age=$2,city=$3 WHERE id=$4',[users.name,Number.parseInt(users.age),users.city,Number.parseInt(users.id)])
    }

    static deleteUser(id){
        return client.query('DELETE FROM users WHERE id=$1',[id])
    }
    
}