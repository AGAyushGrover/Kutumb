const express= require("express");
const app =express();
const User=require("./router/User")
const cors = require("cors");



// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST"],
//   credentials: true // if you're using cookies or sessions
// }));

// const allowedOrigins = ['http://localhost:5173']; // your frontend origin

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true); // allow Postman or curl requests without origin
//     if (allowedOrigins.indexOf(origin) === -1) {
//       return callback(new Error('Not allowed by CORS'), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

const connect=require("./config/database");
const dotenv= require("dotenv");

dotenv.config();
const PORT=process.env.port || 4000;



const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());



app.use("/",User);
app.get("/",(req,res)=>{
    return express.json({
        success:true,
        message:"Your server is up and running..."
    });
});
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
connect.connect();

