const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv'); 
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb Connection Success!");
});

const workoutrouter = require("./routes/WorkoutPlans.js");
app.use("/workoutplan",workoutrouter);

const Twodayworkoutrouter = require("./routes/Twodayworkoutroute.js");
app.use("/Twodayworkoutplan",Twodayworkoutrouter);

const Threedayworkoutrouter = require("./routes/Threedayworkoutroute.js");
app.use("/Threedayworkoutplan",Threedayworkoutrouter);

const ScheduleCRoute = require("./routes/ScheduleCRoute.js");
app.use("/shedulech",ScheduleCRoute);




app.listen(PORT,()=>{
     console.log(`Server is up and runnng on port: ${PORT}`);
});