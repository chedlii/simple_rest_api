import React from "react";
import '../App.css'


const Contact = (props)=>{


return(
     <div className="contact-div">
       <h3> name:{props.contact.name}</h3>
       <h3> email:{props.contact.email}</h3>
       <h3> phone:{props.contact.phone}</h3>
       <button>delete</button>
       <button>Update</button>
        
     </div>
)


}

export default Contact