const { url } = require("inspector");
let mongoose = require("mongoose");

// creating schema
let productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    category:{
        type:String,
        enum:["education","action","fun"],
        lowercase:true,
    },
    author:{
        type:String,
        required:true,
    },
    origin:{
        type:String,
        required:true,
    },
    pages:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    available:{
        type:Number,
        required:true,
    },
    digital:{
        type:Boolean,
    }
})

// using the schema to create model 
let product = mongoose.model("product",productSchema);

module.exports = product;