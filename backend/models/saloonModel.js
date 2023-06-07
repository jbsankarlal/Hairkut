const mongoose = require('mongoose')

const saloonSchema = mongoose.Schema({
    name:{type: String, required: true},
    type:{type: String, required: true},
    place:{type: String, required: true},
    city:{type: String, required: true},
    address:{type: String, required: true},
    distance:{type: String, required: true},
    photos:{type: String,required:true},
    title:{type: String, required: true},
    description:{type: String, required: true},
    mobile:{type: Number, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    services:{type: [String]},
    ratings:{type: Number, min: 0,max:5},
    slot:{type:[String]},
    featured:{type: Boolean, default:false},
    status:{type:Boolean,default:true},
    
})

const Saloon = mongoose.model("Saloon", saloonSchema)

module.exports = Saloon;