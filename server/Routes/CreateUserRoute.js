const express = require("express");
const router = express.Router();
const Customer = require('../models/customerModel');
const Doctor = require('../models/doctorModel');
const Caselog = require('../models/caselogModel');
router.post('/createuser', (req, res) => {
    // const { id, name, email, gender, age, symptoms } = req.body;
    const id = req.body.id; const name = req.body.name; const email = req.body.email; const gender = req.body.gender; const age = req.body.age; const symptoms = req.body.symptoms;
    // console.log(`my id is ${id} , name is ${name} , email is ${email} , my gender is ${gender}`);
    Customer.findOne({ id }, (err, cus) => {
        if (err) {
            console.log("Red Signal::::::::DATABASE ERROR0");
            res.send("TERMINATED0 ::::::");
        }
        else {
            if (!cus) {
                const dataCustomer = { id, name, email, gender, age };
                const newCustomer = new Customer(dataCustomer);
                newCustomer.save((err) => {
                    if (err) {
                        console.log("Red Signal::::::::DATABASE ERROR");
                        res.send("TERMINATED :::::::");
                    }
                    else {
                        console.log("Green Signal:::::::::Success");
                        Doctor.find((err, doctorList) => {
                            if (err) {
                                console.log("Red Signal From Find Doctor::::::::DATABASE ERROR FROM FIND DOCTOR");
                                res.send("TERMINATED2 :::::::");
                            }
                            else {
                                let mn = 999999999;
                                let doc_id; let doc_idx;
                                for (let i = 0; i < doctorList.length; i++) {
                                    if (doctorList[i].cases < mn) {
                                        mn = doctorList[i].cases;
                                        doc_id = doctorList[i].id;
                                        doc_idx = i;
                                    }
                                }
                                const customerId = id; const doctorId = doc_id;
                                const dataCaselog = { customerId, doctorId, symptoms };
                                const newCaselog = new Caselog(dataCaselog);
                                newCaselog.save((err) => {
                                    if (err) {
                                        console.log("Red Signal1::::::::DATABASE ERROR1");
                                        res.send("TERMINATED :::::");
                                    }
                                    else {
                                        console.log("Green Signal1:::::::::Success1");
                                        const updatedCase = doctorList[doc_idx].cases + 1;
                                        const idRequired = doctorList[doc_idx]._id;
                                        Doctor.findByIdAndUpdate(idRequired, { cases: updatedCase }, { new: true }, (err, doc) => {
                                            if (err) {
                                                console.log("Red Signal2::::::::DATABASE ERROR2");
                                                res.send("TERMINATED :::::::");
                                            }
                                            else {
                                                console.log("Green Signal2:::::::::Success2");
                                                res.send("PERFECTLY FINE ::::::::");
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
            else {
                Doctor.find((err, doctorList) => {
                    if (err) {
                        console.log("Red Signal From Find Doctori::::::::DATABASE ERROR FROM FIND DOCTORi");
                        res.send("TERMINATED2i :::::::");
                    }
                    else {
                        let mn = 999999999;
                        let doc_id; let doc_idx;
                        for (let i = 0; i < doctorList.length; i++) {
                            if (doctorList[i].cases < mn) {
                                mn = doctorList[i].cases;
                                doc_id = doctorList[i].id;
                                doc_idx = i;
                            }
                        }
                        const customerId = id; const doctorId = doc_id;
                        const dataCaselog = { customerId, doctorId, symptoms };
                        const newCaselog = new Caselog(dataCaselog);
                        newCaselog.save((err) => {
                            if (err) {
                                console.log("Red Signal1i::::::::DATABASE ERROR1i");
                                res.send("TERMINATEDi :::::");
                            }
                            else {
                                console.log("Green Signal1i:::::::::Success1i");
                                const updatedCase = doctorList[doc_idx].cases + 1;
                                const idRequired = doctorList[doc_idx]._id;
                                Doctor.findByIdAndUpdate(idRequired, { cases: updatedCase }, { new: true }, (err, doc) => {
                                    if (err) {
                                        console.log("Red Signal2i::::::::DATABASE ERROR2i");
                                        res.send("TERMINATEDi :::::::");
                                    }
                                    else {
                                        console.log("Green Signal2i:::::::::Success2i");
                                        res.send("PERFECTLY FINEi :::::::::::::::::");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    });
    // res.send("OVER AND OUT ::::::::");
})
module.exports = router;
