const User = require("../models/userModel");
const createError = require('http-errors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async(req,res,next)=>{
try {
    console.log("10101its comingg");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.password, salt);


    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        mobile:req.body.mobile,
        password:hash,
        gender:req.body.gender
    })

    await newUser.save();
    res.status(200).send("User has been created")

} catch (err) {
    next(err)
}
}


const login = async(req,res,next)=>{
    console.log('log called');
try {

    const user = await User.findOne({username:req.body.username})
    if(!user) return next(createError(404,"User not found!"))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
if(!isPasswordCorrect) return next(createError(400,"Incorrect Username or Password"))

const token = jwt.sign({id:user._id, isAdmin: user.isAdmin, isVendor: user.isVendor }, process.env.JWT)

const {password, isAdmin, isVendor, ...otherInfo} = user._doc;
console.log(user._doc,"user._doc");

    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).send({...otherInfo})

} catch (err) {
    next(err)
}
}

module.exports = {register,login};