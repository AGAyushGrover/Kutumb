const express=require("express");
const router =express.Router();



const {showUser,signUp, login,otpSender,isLoggedIn,saveUser,filterData}=require("../controllers/User");
const{auth}=require("../middlewares/authMiddlewares");

router.get("/test" ,auth ,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Entered test route successfully"

    })
})
// route.get("/student" ,auth ,isStudent,(req,res)=>{
//     res.status(200).json({
//         success:true,
//         message:"Entered student route successfully"

//     })
// })
// route.get("/admin" ,auth ,isAdmin,(req,res)=>{
//     res.status(200).json({
//         success:true,
//         message:"Entered admin route successfully"

//     })
// })


router.post("/login",login);
router.post("/signUp",signUp);
router.get("/profile/:userid", showUser);
router.post("/signUp/send-otp",otpSender);
router.get("/isLoggedIn",isLoggedIn);
router.patch("/profile/:userid/save-user", saveUser);
router.get("/filterdata/:type/:typeName" , filterData );

module.exports=router