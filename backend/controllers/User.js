const schema=require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");





async function signUp(req,res){

   try{
    const {email,password,userid}=req.body;
    const checkDb = await schema.findOne({email});
    const checkUserid = await schema.findOne({userid});
    if(checkDb){ 
        return res.status(400).json({
            success:false,
            message:"User already exists with this email"
        }
          
        )
    }
    if(checkUserid){
        return res.status(400).json({
            success:false,
            message:"User already exists with this user ID"
        });
    }
//   console.log("ok1");
    // secure password
    let hashPass;
    try{
        hashPass=await bcrypt.hash(password,10);
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"ERROR in hashing pass"
        }); 
         
    }
    // console.log("ok2");

   
        const user=await schema.create({
            email, password:hashPass,userid
        })
        console.log(user)

 const payload={
    email:user.email
    // userid:user.userid,
    // id:user._id,
    // provider:user.provider
  }
  const token =jwt.sign( payload , process.env.SECRET_key,   {expiresIn:"2h"});
  // user.password=undefined;
  // user.token=token;
  console.log(token); 
  return res.cookie("myCookie", token, {
    httpOnly: true,
    sameSite: "lax", // works better for localhost dev
    secure: false,   // set to true in production with HTTPS
    maxAge:  10 * 60 * 1000 // 10 minutes
  }).status(200).json({
   token,
    success:true,
    message:"Entered successfully",
  })

    }

    catch(error){
        console.error(error);
       return res.status(500).json({
        success:false,
        message:"User cannot be registerd please try again later"
       })
    }

}
                    //   login section
async function login(req,res){
    try{
        const {email,password}=req.body;

    if(!email || !password){
         return res.status(404).json({
            success:false,
            message:"Fill neccessary details"
         })   
         }

         const user= await schema.findOne({email});
  if(!user){
    return res.status(404).json({
        success:false,
        message:"User not registerd SignUp first!!!"
    })
  }
  const isOk=await bcrypt.compare(password,user.password)
  if( !isOk){
    return res.status(404).json({
        success:false,
        message:"Password is not correct"
    })
  }

  const payload={
    email:user.email,
    // userid:user.userid,
    // id:user._id,
    // provider:user.provider
  }
  const token =jwt.sign( payload , process.env.SECRET_key,   {expiresIn:"2h"});
  console.log(token);
  user.password=undefined;
  user.token=token;
  return res.cookie("myCookie", token, {
    httpOnly: true,
    sameSite: "lax", // works better for localhost dev
    secure: false,   // set to true in production with HTTPS
    maxAge: 200 * 60 * 1000 // 200 minutes
  }).status(200).json({
   token,
    success:true,
    message:"Loggged successfully"
  })



    }
    catch(error){
       return res.status(404).json({
            message:"some error occured"
        })
    }
    


}

async function showUser(req,res){

  const token = req.cookies.myCookie;
  if (!token) return res.status(401).json({ success: false, message: "No token" });
const decoded = jwt.verify(token, process.env.SECRET_key);
// console.log("Decoded Email:", decoded.email);
// const allUsers = await schema.find({});
// console.log("All Users in DB:", allUsers);

// console.log(decoded.email); 
  if(req.params.userid== "me"){

     try {
      // const cleanEmail = decoded.email.trim().toLowerCase();
      // await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 500ms
    const user = await schema.findOne({ email: decoded.email });
    // const user = await schema.find({ email: decoded.email });
    // console.log(decoded.email);
    console.log(3999999);
    console.log(user);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
     user.password = ".........";

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching user", error });
  }

  }
  else{
     try {
    const user = await schema.findOne({ userid: req.params.userid });
    console.log(3999999);
    console.log(user);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
     user.password = ".........";

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching user", error });
  }

  }
    
};

async function otpSender(req, res) {
  try {
        const { email,userid } = req.body;

        // Check if already registered
        const existingUser = await schema.findOne({ email });
        const existingUserid = await schema.findOne({ userid });
        if (existingUser ) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        if (existingUserid) {
            return res.status(400).json({ success: false, message: "User ID already exists" });
        }

      //  

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);
        // const hashedOtp = crypto.createHash("sha256").update(otp.toString()).digest("hex");
        //  const hashedOtp = await bcrypt.hash(otp.toString(), 10);
         const expiresAt = Date.now() + 5 * 60 * 1000; // 5 min expiry
        // otpStore.set(email, {
        //     hashedOtp,
        //     password: hashedPassword,
        //     expiresAt: Date.now() + 5 * 60 * 1000 // 5 min expiry
        // });

        // Send OTP email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verify Your Email",
            text: `Your OTP is ${otp}. It expires in 5 minutes.`
        });

        res.json({ success: true, message: "OTP sent to your email", body: { email, otp, expiresAt } });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error sending OTP", error: err.message });
    }


}

async function isLoggedIn(req, res){
  const token = req.cookies.myCookie;

  if (!token) {
    return res.status(401).json({ loggedIn: false, message: "No token" });
  }

  try {
 
    const user = jwt.verify(token, process.env.SECRET_key);

    // Optionally return user info
    res.json({ loggedIn: true});
  } catch (err) {
    return res.status(401).json({ loggedIn: false, message: "Invalid token" });
  }
}

async function saveUser(req, res) {
  try {
    let targetUserId = req.params.userid;
    const updates = { ...req.body };

    if (targetUserId === "me") {
      const token = req.cookies.myCookie;
      if (!token) return res.status(401).json({ success: false, message: "No token" });

      let decoded;
      try {
        decoded = jwt.verify(token, process.env.SECRET_key);
      } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid token" });
      }

      const selfUser = await schema.findOne({ email: decoded.email });
      if (!selfUser) return res.status(404).json({ success: false, message: "User not found" });

      targetUserId = selfUser.userid;
    }

   
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    const updatedUser = await schema.findOneAndUpdate(
      { userid: targetUserId },
      { $set: updates },
      { new: true }
    );
    console.log("Updated user:", updatedUser);

    if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });

    updatedUser.password = "********";

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Error updating user" });
  }
}

async function filterData(req, res) {
  try {
    const { type, typeName } = req.params; // /filterdata/:type/:typeName

    const query = {};

    // Match register_as field (example: "Product-Supplier")
    if (type) {
      query.register_as = { $regex: type.trim(), $options: "i" };
    }

    // Match specification array (example: ["Construction"])
    if (typeName) {
      query.specification = { $regex: typeName.trim(), $options: "i" };
    }

    const data = await schema.find(query);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    res.status(500).json({ success: false, message: "Error fetching filtered data" });
  }
}



  module.exports = {
    signUp,
    login,
    showUser,
    otpSender,
    isLoggedIn,
    saveUser,
    filterData
};

