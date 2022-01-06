const mongoose = require("mongoose");
const caselogSchema = mongoose.Schema(
    {
        customerId: {
            type: Number,
            required: true
        },
        doctorId: {
            type: Number,
            required: true
        },
        symptoms: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Caselog = mongoose.model("Caselog", caselogSchema);
module.exports = Caselog;