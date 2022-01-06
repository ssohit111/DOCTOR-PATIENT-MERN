const mongoose = require('mongoose');
const customerSchema = mongoose.Schema(
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
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;