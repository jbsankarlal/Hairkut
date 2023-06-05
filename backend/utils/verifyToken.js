const jwt = require('jsonwebtoken')
const createError = require('http-errors');


const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You're not authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err,user)=>{
        if(err) return next(createError(403,"Token is not valid"));
        req.user = user;
        next();
    })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req.user,"lialk");
        console.log(req.params.id,"l99klkl");
if(req.user.id === req.params.id || req.user.isAdmin){
    next();
}else{
    return next(createError(403,"You are not authorsized"))
}
    });
}


const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
if(req.user.isAdmin){
    next();
}else{
    return next(createError(403,"You are not authorsized"))
}
    });
}

const verifyVendor = (req,res,next)=>{
    verifyToken(req,res,next ,()=>{
if(req.user.isVendor){
    next();
}else{
    return next(createError(403,"You are not authorsized"))
}
    });
}



module.exports = { verifyToken, verifyUser, verifyAdmin, verifyVendor };