const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema(
    {
        servicename:{type: String, required: true, unique: true},
        price:{type: Number, required: true, unique: true},
        gender: { type: String, required: true},
        saloonId:{type: String, required :true}},
         {
        timestamps:true
    }
)

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service;