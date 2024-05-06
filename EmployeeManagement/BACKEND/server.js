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
connection.once('open' , () =>{
    console.log("Mongodb Connection success!");

})

const ScheduleRoute = require("./routes/schedulesRoute.js");
app.use("/TrainerSchedule", ScheduleRoute );

const AppoinmentRouter = require("./routes/AppoinmentRoutes.js");
app.use("/appointment", AppoinmentRouter );

const maintenanceRouter = require("./routes/Maintenanceroutes.js");
app.use("/maintenance" , maintenanceRouter );

const maintenance1Router = require("./routes/Maintnance1routes.js");
app.use("/maintenance1" , maintenance1Router );

const packageRouter = require("./routes/packagesRoute.js");
app.use("/package", packageRouter);

const proPackageRouter = require("./routes/proPackageRoute.js");
app.use("/proPackage", proPackageRouter);

const userPackage = require("./routes/userPkgRoute.js");
app.use("/userPkg", userPackage);

const userProPackage = require("./routes/userProPkgRoute.js");
app.use("/userProPkg", userProPackage);

const workoutrouter = require("./routes/WorkoutPlans.js");
app.use("/workoutplan",workoutrouter);

const Twodayworkoutrouter = require("./routes/Twodayworkoutroute.js");
app.use("/Twodayworkoutplan",Twodayworkoutrouter);

const Threedayworkoutrouter = require("./routes/Threedayworkoutroute.js");
app.use("/Threedayworkoutplan",Threedayworkoutrouter);

const ScheduleCRoute = require("./routes/ScheduleCRoute.js");
app.use("/shedulech",ScheduleCRoute);

const ReportRoute = require("./routes/TrainerReportRoutes.js");
app.use("/Report",ReportRoute);

const EmployeeRoute = require("./routes/EmployeeRoute.js");
app.use("/emp",EmployeeRoute);

const authRoutes = require('./routes/authRoutes.js');
app.use('/auth', authRoutes);


const PaymentRoutes = require('./routes/PaymentRoutes.js');
app.use('/Payment', PaymentRoutes);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})
