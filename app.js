const express = require("express");
const app = express();
const cors=require("cors");
const user = require('./routes/user');
const quiz = require('./routes/quiz');
const mongoose = require('mongoose');
require('dotenv').config()

// This tells the browser to allow cross origin ports
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB);
mongoose.connection.on('connected',function(){
    console.log("Database connection setup");
})

const server = app.listen(process.env.PORT || 8080,
     () => {
  console.log("Server Listening");
});

app.use('/api/1.0/users', user);
app.use('/api/1.0/quiz', quiz);

// This helps to host react js files
app.use(express.static("public"));
