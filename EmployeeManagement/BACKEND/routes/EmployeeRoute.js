const router = require("express").Router();
let Employee = require("../models/EmployeeModel.js");

//insert part

router.route("/add").post((req, res) => {
    const EmpId = req.body.EmpId;
    const empName = req.body.empName;
    const eAge = Number(req.body.eAge);
    const eGender = req.body.eGender;
    const eHeight = Number(req.body.eHeight);
    const eWeight = Number(req.body.eWeight);
    const eAddress = req.body.eAddress;
    const ePhone = req.body.ePhone;
    const empEmail = req.body.empEmail;


    const newPackage = new Employee({
        EmpId,
        empName,
        eAge,
        eGender,
        eHeight,
        eWeight,
        eAddress,
        ePhone,
        empEmail
    })

    newPackage.save().then(() => {
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

//update part

router.route("/update/:id").put(async(req,res) => {
    let packageId = req.params.id;
    const{EmpId, empName, eAge,eGender, eHeight,eWeight,eAddress,ePhone,empEmail} = req.body;

    const updatePackage = {
        EmpId,
        empName,
        eAge,
        eGender,
        eHeight,
        eWeight,
        eAddress,
        ePhone,
        empEmail
    }

    const update = await Employee.findByIdAndUpdate(packageId,updatePackage).then(() => {
        res.status(200).send({status: "Employee updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating package", error: err.message});
    })
})

//delete part

router.route("/delete/:id").delete(async(req,res) => {
    let packageId = req.params.id;

    await Employee.findByIdAndDelete(packageId).then(() => {
        res.status(200).send({status: "Package deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting the package", error: err.message});
    })
})

//get details by an id

router.get('/get/:id', async (req, res) => {
    try {
        const employee = await Employee.findOne({ EmpId: req.params.id });
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;