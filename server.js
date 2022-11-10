const express = require('express');

const path = require('path');
const app = express();
const {client} = require("./app/config/DB.js")


client.connect();

// Data Base Connection

const router = require('./app/router/Router.js');

//app.use(express.static("/public"));
//arun.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.json({
    limit: '50mb'
}));



app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use('/', router );


app.listen(4000, function(){
    console.log("Server has started Succesflly")
})