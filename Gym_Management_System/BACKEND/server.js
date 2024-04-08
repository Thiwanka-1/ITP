const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
import UserRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import employe from './routes/employe.route.js';

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

const packageRouter = require("./routes/packagesRoute.js");
app.use("/package", packageRouter);

const proPackageRouter = require("./routes/proPackageRoute.js");
app.use("/proPackage", proPackageRouter);

const userPackage = require("./routes/userPkgRoute.js");
app.use("/userPkg", userPackage);

const userProPackage = require("./routes/userProPkgRoute.js");
app.use("/userProPkg", userProPackage);

app.use('/api/user', UserRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/employe', employe);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})



