const router = require("express").Router();
let Package = require("../models/PackageModel.js");

//insert part

router.route("/add").post((req, res) => {
    const packageNumber = Number(req.body.packageNumber);
    const packageName = req.body.packageName;
    const price = Number(req.body.price);
    const duration = req.body.duration;
    const packageType = req.body.packageType;
    const description = req.body.description;

    const newPackage = new Package({
        packageNumber,
        packageName,
        price,
        duration,
        packageType,
        description
    })

    newPackage.save().then(() => {
        res.json("Package Added")
    }).catch((err) => {
        console.log(err);
    })
})

//read part

router.route("/").get((req,res) => {
    Package.find().then((packages) => {
        res.json(packages)
    }).catch((err) => {
        console.log(err)
    })
})

//update part

router.route("/update/:id").put(async(req,res) => {
    let packageId = req.params.id;
    const{packageNumber, packageName, price, duration, packageType, description} = req.body;

    const updatePackage = {
        packageNumber,
        packageName,
        price,
        duration,
        packageType,
        description
    }

    const update = await Package.findByIdAndUpdate(packageId,updatePackage).then(() => {
        res.status(200).send({status: "Package updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating package", error: err.message});
    })
})

//delete part

router.route("/delete/:id").delete(async(req,res) => {
    let packageId = req.params.id;

    await Package.findByIdAndDelete(packageId).then(() => {
        res.status(200).send({status: "Package deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting the package", error: err.message});
    })
})

//get details by an id

router.route("/get/:id").get(async(req,res) => {
    let packageId = req.params.id;
    const user = await Package.findById(packageId).then((Package) => {
        res.status(200).send({status: "Package fetched", Package})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get package", error: err.message});
    })
})

module.exports = router;