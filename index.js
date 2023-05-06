const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 8000


function dbconnect(){
    mongoose.connect("mongodb://127.0.0.1:27017/mongooseConnect").then(()=>{console.log("connected");}).catch((err)=>{console.log(err.message);})
}

dbconnect();

app.get("/", function(req, res){
    res.send("Hello, World!")
})

//schema or models
const uSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
},{versionKey:false})

const User = new mongoose.model("User",uSchema)

//data
const user = new User({
    name: "Lakshaya",
    email: "Lakshayakalra29@gmail.com",
    password: "password"
})
user.save();


app.listen(port,function(){
    console.log("Server started "+ port)
})
