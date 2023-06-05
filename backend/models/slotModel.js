const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    startTime: {type: String,required: true},
    endTime: {type: String,required: true },
    isAvailable: { type: Boolean, default: true },
    service: { type: String, required: true},
    // slotNumber:[{number:String, unavailableDates:[{type:Date}]}],
    slotNumber:{type:String,required:true}}, 
    {
        timestamps:true
    }
    
    
    
)

const Slot = mongoose.model("Slot", slotSchema)

module.exports = Slot;

// customerName: {type: String,default: null},
// customerPhoneNumber: {type: String,default: null},