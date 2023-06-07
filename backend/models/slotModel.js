const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    service: { type: String, required: true},
    startTime: {type: String,required: true},
    endTime: {type: String,required: true },
    slotNumber:{type:String,required:true},
    isAvailable: { type: Boolean, default: true },
    saloonID:{type:String, required:true}}, 
    {
        timestamps:true
    }
    
    
    
)

const Slot = mongoose.model("Slot", slotSchema)

module.exports = Slot;

// customerName: {type: String,default: null},
// customerPhoneNumber: {type: String,default: null},