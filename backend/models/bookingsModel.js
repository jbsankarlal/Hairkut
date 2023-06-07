const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    name:{type: String, required: true},
    gender:{type: String, required: true},
    mobile:{type: Number, required: true},
    email:{type: String, required: true},
    date:{type:Date,required:true},
    saloon:{type:String, required:true},
    saloonAddress:{type: String},
    saloonDistance:{type: String},
    count:{type:Number,required:true},
    slotDetails: [{
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    service: { type: String, required: true },
    slotNumber: { type: String, required: true }
  }],
    amount:{type:String, required:true},
    token:{type:{String}}
    
})

const Booking = mongoose.model("Booking", bookingSchema)

module.exports = Booking;