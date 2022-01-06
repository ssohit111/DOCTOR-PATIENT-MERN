const express = require('express');
const router = express.Router();
const Caselog = require('../models/caselogModel');
router.get('/casebyid/:id', (req, res) => {
    const inputId = req.params.id;
    Caselog.find({ customerId: inputId }, (err, cases) => {
        if (err) console.log("Red Signal:::::DATABASE ERROR FROM GET CASELOG LIST1");
        else {
            res.json(cases.length);
        }
    })
})
module.exports = router;