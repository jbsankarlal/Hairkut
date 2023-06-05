const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username:{type: String, required: true, unique: true},
        email:{type: String, required: true, unique: true},
        mobile: { type: Number, required: true,unique: true},
        password: { type: String, required: true},
        gender:{type:String, required:true},
        status:{type:Boolean,default:true},
        isAdmin :{type: Boolean, default: false},
        isVendor :{type: Boolean, default: false}},
         {
        timestamps:true
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User;