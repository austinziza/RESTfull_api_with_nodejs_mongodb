const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

//import route
const postsRoute = require('./routes/post')
app.use(cors())
app.use(bodyParser.json());
app.use('/posts',postsRoute);


//Route
app.get('/', (req, res) => {
    res.send("we are on the home page")
})

app.get('/posts', (req, res) => {
    res.send("we are on the post page")
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true}, ()=>
console.log('connected to database')
)

app.listen(3000, () => {
    console.log("listening at port 3000")
})