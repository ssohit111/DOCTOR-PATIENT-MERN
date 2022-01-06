const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        cases: {
            type: Number,
            required: true
        },
        specialization: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;