const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb Connection success!");
})
const userRouters = require("./routes/userRoutes.js");
const contactRouters = require("./routes/contactRoutes.js");
const feedbackRouters = require("./routes/feedbackRoutes.js");
app.use("/user",userRouters);
app.use("/contact", contactRouters);
app.use("/feedback",feedbackRouters);



app.listen(PORT, () => {
    console.log('Server is Running on port ')
})