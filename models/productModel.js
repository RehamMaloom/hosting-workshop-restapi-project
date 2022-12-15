const mongoose = require('mongoose')

const product = mongoose.Schema({

        name:{
            type:String,
            
        },
        price:{
            type:Number,
        }
})
module.exports= mongoose.model("product",product)
