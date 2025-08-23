const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
require("dotenv").config();


function auth(req,res,next){
    try{
        console.log(req.cookies)
        const token=req.cookies.myCokkie ;
        console.log(token);

    if(!token){
        return res.status(404).json({
            success:false,
            message:"Not an authentic user"
        })
    }

    try{
        const userData=jwt.verify(token,process.env.SECRET_key);
        req.userData=userData;
        // console.log(req);
    }
    catch(error){
        return res.status(404).json({
            success:false,
            message:"Error in token fetching"
        })
    }
    next();

    }
    catch(error){
       return  res.status(404).json({
            success:false,
            message:"Something wrong happened"
        })

    }
    
}
function isStudent(req,res,next){
    try{
        const role=req.userData.role;
        if(role!="Student"){
            return res.status(404).json({
                success:false,
                message:"This is route for student role"
            })
        }
        next();

    }
    catch(error){
        return res.status(404).json({
            success:false,
            message:"User role is not matching"
        }) 


    }
}
function isAdmin(req,res,next){
    try{
        const role=req.userData.role;
        if(role!="Admin"){
            return res.status(404).json({
                success:false,
                message:"This is route for Admin role"
            })
        }
        next();

    }
    catch(error){
        return res.status(404).json({
            success:false,
            message:"User role is not matching"
        }) 


    }
}
module.exports={
    auth,
    isStudent,
    isAdmin
}

