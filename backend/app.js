
const express = require("express");

const mongoose = require("mongoose");

const router = require("./routes/book-routes");

const app = express();

mongoose.connect("mongodb+srv://admin:krishna@cluster0.5dyqmcl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected to database")).then(()=>{app.listen(5000,()=>console.log("server running"))})
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/books",router);