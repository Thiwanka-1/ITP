const router = require("express").Router();
let Employee = require("../models/EmployeeModel");

//insert part

router.route("/add").post((req, res) => {
    const empid = req.body.empid;
    const empname = req.body.empname;
    const job = req.body.job;

    const newEmployee = new Employee({
        empid,
        empname,
        job,
        
    })

    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })
})

//read part

router.route("/").get((req,res) => {
    Employee.find().then((packages) => {
        res.json(packages)
    }).catch((err) => {
        console.log(err)
    })
})


router.route("/get/:id").get(async(req,res) => {
    let packageId = req.params.id;
    const user = await Employee.findById(packageId).then((Package) => {
        res.status(200).send({status: "Employee fetched", Package})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get package", error: err.message});
    })
})

module.exports = router;