const mongoose = require("mongoose")
// const {boolean} =require("webidl-conversions");
const ProductSchema = new mongoose.Schema(
    {
        title : {type : String , required:true , unique:true},
        
        deadline:{
            type: Date,
            
        },
        award:{
            type: String,
       
        },
        description:{
            type: String,
            required: true
        },
        website:{
            type: String,
  
        },
        elegibility:{
            type: String,
            required : true
        },
        origin:{
            type: String,
            required: true
        },
        elegibility2:{
            type: String,
            
        },
        elegibility3:{
            type: String,
            
        },
        state:{
            type: String
        },
        profession:{
            type: String
        }
        ,
        gender:{
            type: String
        },
        income:{
            type: String 
        },
        category:{
            type:String
        }


    },{timestamps:true}
)
module.exports = mongoose.model("Product",ProductSchema);