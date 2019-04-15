import React from "react";
import Contact from "./contact"



class ContactList extends React.Component {

render(){


    return(
           
       <div className="contact-list">
           {this.props.contacts.map(el=>{
              
              return  <Contact contact={el}/>
                

           })}

       </div>
         )

         
   
    
}




}

export default ContactList;