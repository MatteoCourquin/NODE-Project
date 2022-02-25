const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");
const port = 3000;
const testRoutes = require("./routes/routes");
const path = require("path");
const bodyParser = require('body-parser')


mongoose
    .connect(
        "mongodb+srv://mattechno:gjNk1m7ZgaINwbrX@cluster0.jwefw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("db valid"))
    .catch(() => console.log("db error"))

app.use(bodyParser.json())
app.use(express.static('../frontend'))
app.use(bodyParser.urlencoded({
    extended:true
}))



/*
app.use('/',(req, res,next) =>{
    res.json({message: "oklm"})
})*/
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// app.use("/test", testRoutes);
app.use("/test", testRoutes);



module.exports = app;
