const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctorModel');
router.get('/doctorlist', (req, res) => {
    Doctor.find((err, doctorList) => {
        if (err) console.log("Red Signal:::::DATABASE ERROR FROM GET DOCTOR LIST");
        else {
            res.send(doctorList);
        }
    })
})
module.exports = router;