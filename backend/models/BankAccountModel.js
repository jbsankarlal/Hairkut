const mongoose = require('mongoose')

const bankAccountSchema = mongoose.Schema(
    {
        accountNo:{type: String, required: true, unique: true},
        fullName:{type: String, required: true},
        ifsc: { type: String, required: true},
        upi: { type: String, required: true, unique: true},
        mobile: { type: Number, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        pan: { type: String, required: true, unique: true},
        saloonId:{type: String, required :false}},
         {
        timestamps:true
    }
)

const BankAccount = mongoose.model("BankAccount", bankAccountSchema)

module.exports = BankAccount;