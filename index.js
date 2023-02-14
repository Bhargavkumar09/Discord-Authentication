require("dotenv").config();
const express = require("express");
const {PORT:port} = process.env;

const app = express();

app.get("/",(req,res)=> {
    return res.sendFile("index.html", {root:"."});
})

app.listen(port,()=> console.log(`Listening to ${port}`));