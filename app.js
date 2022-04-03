const express = require("express");
const app = express();
const cors=require("cors");
const user = require('./routes/user');


// This tells the browser to allow cross origin ports
app.use(cors());

const server = app.listen(process.env.PORT || 8080,
     () => {
  console.log("Server Listening");
});

app.use('/users', user);

// This helps to host react js files
app.use(express.static("public"));
