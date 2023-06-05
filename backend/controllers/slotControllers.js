const Slot = require('../models/slotModel') 
const Saloon = require('../models/saloonModel')
const createError = require('http-errors');

const createSlot = async (req,res,next)=>{

    const saloonId = req.params.saloonId;
    const newSlot = new Slot(req.body)
console.log("comingg");
    try {
        const savedSlot =  await newSlot.save()
        try {
            await Saloon.findByIdAndUpdate(saloonId,{$push : {slot: savedSlot._id}})
        } catch (err) {
            next(err)
        }

     res.status(200).json(savedSlot);
    } catch (err) {
        next(err)
    }

}

const updateSlot = async(req,res,next)=>{
  try {
       const updatedSlot = await  Slot.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true}) 
       res.status(200).json(updatedSlot)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }  
}

const deleteSlot = async(req,res,next)=>{

     const saloonId = req.params.saloonId;
     try {
       await  Slot.findByIdAndDelete(req.params.id) 
        try {
            await Saloon.findByIdAndUpdate(saloonId,{$pull : {slot: req.params.id}})
        } catch (err) {
            next(err)
        }

       res.status(200).json("Slot has been deleted")

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSlot = async(req,res,next)=>{
     try {
       const slot = await  Slot.find(req.params.id) 
       res.status(200).json(slot)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSlotData = async (req, res, next) => {
  try {
    const slotIds = req.params.id.split(','); // Split the string into an array of slot IDs
    const slots = await Slot.find({ _id: { $in: slotIds } });   
    if (!slots.length) {
      return res.status(404).json({ error: 'Slots not found' });
    }
    
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};



const getAllSlot = async(req,res,next)=>{
    try {
       const slot = await  Slot.find() 
       res.status(200).json(slot)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

module.exports= { createSlot, updateSlot, deleteSlot, getSlot, getAllSlot, getSlotData };