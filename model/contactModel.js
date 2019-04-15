let mongoose = require('mongoose')


let contactModel = mongoose.Schema({
  
    name :{
       type : String,
       required : true

    },
    email:{
      type : String,
      required : true

    },
    phone:{
        type : String,
        required : true

    }


})

// export contact shema:
 
let Contact = module.exports = mongoose.model('contact',contactModel)