const express = require('express')
let router = express.Router()


// contact shema :
let  Contact = require('../model/contactModel')





/*  GET CONTACT LIST*/

router.get('/',(req,res)=>{

Contact.find({},(err,data)=>{

    if(err) console.log(err)
    else
    res.json(data)


})
})

/* ADD CONTACT*/

router.post('/add',(req,res)=>{

    let contact = new Contact ({
     name : req.body.name,
     email: req.body.email,
     phone : req.body.phone


    })

    contact.save().then((contact)=> res.send(contact +"\n added")).catch((err)=> res.status(400).send(err))
})


/* DELETE CONTACT  */

router.delete('/delete_contact/:id',(req,res)=>{
   
 Contact.findOneAndRemove({_id : req.params.id}).then(contact=>{

    res.send(contact+"deleted")
 }).catch(err=>res.send(err))


})


/* UPDATE CONTACT */


router.put('/update_contact/:id',(req,res)=>{

Contact.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}}).then(contact=>res.send(contact+" updated"))
.catch(err => res.send(err))



})






module.exports = router