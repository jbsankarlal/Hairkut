const Saloon = require("../models/saloonModel");
const Slot = require("../models/slotModel");
const BankAccount = require("../models/BankAccountModel")
const cloudinary = require('../utils/cloudinary')
const createError = require('http-errors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');



    const createSaloon = async(req,res,next)=>{
    const newSaloon=  new Saloon(req.body)

   
    
    try {

         var salt = bcrypt.genSaltSync(10);
         var hash = bcrypt.hashSync(req.body.password, salt);


        const image = await cloudinary.uploader.upload(req.file.path)
        console.log(image.secure_url);
        newSaloon.photos = image.secure_url
        newSaloon.password= hash
        console.log(newSaloon,"saloonsss");
       const savedSaloon = await  newSaloon.save() 
       res.status(200).json(savedSaloon)

    } catch (err) {
        next(err);
    }
}

const bankInfo = async (req, res, next) => {
 
  try {
 const bankData = new BankAccount(req.body);
  console.log(bankData, "bankData");
    
    const bankDetails = await bankData.save();
    console.log(bankDetails, "bankDetails");
    res.status(200).json(bankDetails);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    
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

const getAllSaloons = async(req,res,next)=>{
    try {
        console.log(req.query.limit,"helooyy22");
       const saloon = await Saloon.find().skip((req.query.page-1)*req.query.limit).limit(req.query.limit)
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}


module.exports= { createSaloon, updateSaloon, deleteSaloon, getSaloon,getSaloonCity, getAllSaloon,getAllSaloons, updateSaloonStatus, countByService, countByCity, getSlots, bankInfo };

