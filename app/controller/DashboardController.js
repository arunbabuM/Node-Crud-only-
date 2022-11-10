// import "./first/public/style.css";
// const users = [{username: 'arun',pass: 'arun'}]
const model = require("../model/Model.js");

module.exports = {
    getDashboardPage : (req , res , next ) =>{
        Promise.all([model.getAllData()]).then(result => {
            res.render('dashboard', {
                data: result[0].rows,
            })
        })
    },

    getAddUserPage: (req, res) => {
        res.render("addUser");
    },

    insertUser: (req, res) => {
        // const {name, age, city} = req.body
        // REFERENCE OF -------------->  const name = req.body.name
        Promise.all([model.insertUser(req.body)]).then( result => {
            
            res.redirect('/dashboard');
        }).catch (error => {
            console.log("ERROR><><><><<<><><><><><>", error);
        })
 
    },

    getUpdatePage: (req, res) => {
        const id = req.query.id;
        console.log("ID <><>><><>>", id)
        Promise.all([model.getUserById(Number.parseInt(id))]).then(result => {

            if(result) {
                res.render("edit-page", {
                    data: result[0].rows
                });
            }else {

                res.redirect('dashboard');
            }
        }).catch ( error => {
            res.redirect('dashboard');
        })
    },

    updateUser: (req, res) => {

        console.log("DATA ><><<>", req.body)
        Promise.all([model.updateUser(req.body)]).then( result => {
            
            res.redirect('/dashboard');
        }).catch (error => {
            console.log("ERROR><><><><<<><><><><><>", error);
            res.redirect('/dashboard');
        })
 
    },

    deleteUser: (req, res) => {

        const id = req.query.id;

        Promise.all([model.deleteUser(id)]).then( result => {
            
            res.redirect('/dashboard');
        }).catch (error => {
            console.log("ERROR><><><><<<><><><><><>", error);
            res.redirect('/dashboard');
        })
    },
    
    
}