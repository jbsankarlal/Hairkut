const Service = require('../models/serviceModel')

const createService = async(req,res,next)=>{
    const newService=  new Service(req.body)
    
    try {
       const savedService = await  newService.save() 
       res.status(200).json(savedService)

    } catch (err) {
        next(err);
    }
}


const updateService = async(req,res,next)=>{
  try {
       const updatedService = await  Service.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true}) 
       res.status(200).json(updatedService)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }  
}

const deleteService = async(req,res,next)=>{
     try {
       await  Service.findByIdAndDelete(req.params.id) 
       res.status(200).json("Service has been deleted")

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getService = async(req,res,next)=>{
     try {
        console.log("service kitti",req.query.sname);

       const service = await  Service.find({saloonId:req.query.id,servicename:req.query.sname}) 
       console.log(service,"daataSEE");
       res.status(200).json(service)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getAllService = async(req,res,next)=>{
    try {
       const service = await  Service.find() 
       res.status(200).json(service)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}


module.exports = {createService, updateService, deleteService, getService, getAllService}