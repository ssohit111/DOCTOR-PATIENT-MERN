const express = require('express');
const router = express.Router();
const Caselog = require('../models/caselogModel');
router.get('/historybyid/:id', (req, res) => {
    const inputId = req.params.id;
    Caselog.find({ customerId: inputId }, (err, cases) => {
        if (err) console.log("Red Signal:::::DATABASE ERROR FROM GET CASELOG LIST2");
        else {
            res.send(cases);
        }
    })
})
module.exports = router;