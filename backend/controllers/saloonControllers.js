const Saloon = require("../models/saloonModel");
const Slot = require("../models/slotModel");
const BankAccount = require("../models/BankAccountModel")

 const createSaloon = async(req,res,next)=>{
    const newSaloon=  new Saloon(req.body)
    
    try {
       const savedSaloon = await  newSaloon.save() 
       res.status(200).json(savedSaloon)

    } catch (err) {
        next(err);
    }
}

const bankInfo = async (req, res, next) => {
  const bankData = new BankAccount(req.body);
  console.log(bankData, "bankData");
  try {
    const bankDetails = await bankData.save();
    console.log(bankDetails, "bankDetails");
    res.status(200).json(bankDetails);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    
    // Handle the error and send an appropriate response to the client
    res.status(500).json({ error: 'An error occurred while saving bank details' });
  }
};



const updateSaloon = async(req,res,next)=>{
  try {
       const updatedSaloon = await  Saloon.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true}) 
       res.status(200).json(updatedSaloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }  
}

const updateSaloonStatus = async (req, res, next) => {
    console.log("222-22-222-000",req.params.id,req.body.status);
  try {
    const updatedUserStatus = await Saloon.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.status(200).json(updatedUserStatus);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};



const deleteSaloon = async(req,res,next)=>{
     try {
       await  Saloon.findByIdAndDelete(req.params.id) 
       res.status(200).json("Saloon has been deleted")

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSaloon = async(req,res,next)=>{
     try {
        console.log("happyget");
       const saloon = await  Saloon.findOne({_id:req.params.id}) 
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSaloonCity = async(req,res,next)=>{
     try {
        console.log("helooyyyy");
       const saloon = await  Saloon.find({city:req.params.id}) 
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getAllSaloon = async(req,res,next)=>{
    try {
        console.log(req.query.limit,"helooyy22");
       const saloon = await Saloon.find().limit(req.query.limit)
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const countByService = async(req,res,next)=>{
    const services = req.query.services.split(',')
    try {
        const list = await Promise.all(services.map(service=>{
            return Saloon.countDocuments({type:service})
        }))
       const saloon = await  Saloon.find() 
       res.status(200).json(list)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const countByCity = async(req,res,next)=>{
   
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city=>{
            return Saloon.countDocuments({city:city})
        }))
       const saloon = await  Saloon.find() 
       res.status(200).json(list)

    } catch (err) {
        res.status(500).json(err)
         //next(err);
    }
}

const getSlots = async (req,res,next)=>{
    try {
        console.log("slots are getting ok");
        const saloon = await Saloon.findById(req.params.id)
        const list = await Promise.all(
            saloon.slot.map(slo=>{
            return Slot.findById(slo)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}


module.exports= { createSaloon, updateSaloon, deleteSaloon, getSaloon,getSaloonCity, getAllSaloon, updateSaloonStatus, countByService, countByCity, getSlots, bankInfo };

