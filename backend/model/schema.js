const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    userid:{
        type: String,
        default: 'Not Specified'
        // required: true,
        // unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        default: 'Not Specified'
        // required: true
    },
    contact:{
        type:Number,
        default: 0
    },
    email :{
        type:String,
         default: 'Not Specified',
        required: true
    },
    address: {                                      
        type: String,
        default: 'Not Specified',
        // required: true
   },
    years_of_experience :{
        type :Number,
        default: 0
    },
    projects_supplied :{
        type: Number,
        default: 0
    },
    customer_satisfaction :{
         type: Number,
        default: 0
    },
    registration_no :{
        type: String,
        default: 'Not Specified'
    },
    tags: {
        type: [String],
        default: []
    },
    user_image_url :{
        type: String,
        default: 'Not Specified'
    },
    work_images_urls :{
        type: [String],
        default: []
    },
    coordinates :{
        lat:{type: mongoose.Types.Decimal128, default: 0} ,
        lon:{type: mongoose.Types.Decimal128, default: 0}
    },
    register_as: {
        type: String,
        enum: ['consumer', 'Service-provider', 'Product-supplier','Open-to-all','Not Specified'],
        default: 'Not Specified'
        // required: true,
    },
    specification:{
        type: [String],
        set: arr => arr.slice(0, 3),
        default: []
        // required: true
    },
    
});

module.exports=mongoose.model("schema",schema);