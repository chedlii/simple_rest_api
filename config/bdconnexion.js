let mongoose = require('mongoose');


//connect to mongoose and set connexion variables:
mongoose.connect('mongodb://localhost/resapi_checkpoint',{ useNewUrlParser: true });
let db = mongoose.connection;



//event listener for db connection:
mongoose.connection.once('open',()=>{

  console.log("succefully connected to data base")
}).on('error',(error)=>{

   console.log("connection error :",error)
})

module.exports = mongoose