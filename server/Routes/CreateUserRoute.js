const express = require("express");
const router = express.Router();
const Customer = require('../models/customerModel');
const Doctor = require('../models/doctorModel');
const Caselog = require('../models/caselogModel');
router.post('/createuser', (req, res) => {
    const { id, name, email, gender, age, symptom } = req.body;
    // console.log(`my id is ${id} , name is ${name} , email is ${email} , my gender is ${gender}`);
    Customer.findOne({ id }, (err, cus) => {
        if (err) console.log(err);
        else {
            if (!cus) {
                const newCustomer = new Customer(req.body);
                newCustomer.save((err) => {
                    if (err) console.log("Red Signal::::::::DATABASE ERROR");
                    else {
                        console.log("Green Signal:::::::::Success");
                        Doctor.find((err, doctorList) => {
                            if (err) console.log("Red Signal From Find Doctor::::::::DATABASE ERROR FROM FIND DOCTOR");
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
                                const customerId = id; const doctorId = doc_id; const symptoms = symptom;
                                const dataCaselog = { customerId, doctorId, symptoms };
                                const newCaselog = new Caselog(dataCaselog);
                                newCaselog.save((err) => {
                                    if (err) console.log("Red Signal1::::::::DATABASE ERROR1");
                                    else {
                                        console.log("Green Signal1:::::::::Success1");
                                        const updatedCase = doctorList[doc_idx].cases + 1;
                                        const idRequired = doctorList[doc_idx]._id;
                                        Doctor.findByIdAndUpdate(idRequired, { cases: updatedCase }, { new: true }, (err, doc) => {
                                            if (err) console.log("Red Signal2::::::::DATABASE ERROR2");
                                            else {
                                                console.log("Green Signal2:::::::::Success2");
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    });

})
module.exports = router;