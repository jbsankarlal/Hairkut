const User = require("../models/userModel");

 const createUser = async(req,res,next)=>{
    const newUser=  new User(req.body)
    
    try {
       const savedUser = await  newUser.save() 
       res.status(200).json(savedUser)

    } catch (err) {
        next(err);
    }
}


const updateUser = async(req,res,next)=>{
  try {
       const updatedUser = await  User.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true}) 
       res.status(200).json(updatedUser)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }  
}

const updateUserStatus = async (req, res, next) => {
    console.log("222-22-222-000",req.params.id,req.body.status);
  try {
    const updatedUserStatus = await User.findByIdAndUpdate(
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


const deleteUser = async(req,res,next)=>{
     try {
       await  User.findByIdAndDelete(req.params.id) 
       res.status(200).json("User has been deleted")

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getUser = async(req,res,next)=>{
     try {
       const user = await  User.find(req.params.id) 
       res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getAllUser = async(req,res,next)=>{
    console.log("3333---33333----3333");
    try {
       const user = await  User.find() 
       res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

module.exports= { createUser, updateUser, deleteUser, getUser, getAllUser , updateUserStatus};

