const express = require('express');
const mongoose = require('mongoose');
const Customer = require('../models/customerModel');
const router = express.Router();
router.get('/patientlist', (req, res) => {
    Customer.find((err, customerList) => {
        if (err) console.log("Red Signal:::::DATABASE ERROR FROM GET PATIENT LIST");
        else {
            res.send(customerList);
        }
    })
})
module.exports = router;