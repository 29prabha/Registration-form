const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express ();
exports.app = app;
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect('mongodb+srv://${username}:${password}@cluster0.sk9xwcv.mongodb.net/registrationFormDB' ,  {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

//registration schema
const registrationSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

//mode of registration schema
const Registration = mongoose.model("Registration",registrationSchema);
exports.Registration = Registration;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/pages/index.html");
})

app.get("/success",(req,res)=>{
    res.sendFile(__dirname+"/pages/success.html");
})
app.get("/error",(req,res)=>{
    res.sendFile(__dirname+"/pages/error.html");
})

app.listen(port,()=>{
    console.log('server is running on port ${port}');
})