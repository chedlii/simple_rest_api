import React from "react";
import axios from 'axios';

class AddContact extends React.Component {
    constructor(props){
        super(props)


        this.state ={
         name : "",
         email :"",
         phone : ""

        }
    }

    handleChange=(event)=>{
     
        this.setState({
      [event.target.name]: event.target.value

        })


    }

    onSubmit =(event)=>{
         event.preventDefault()
          
         // decalring an object to receive the state
         const obj = {
          name : this.state.name,
          email : this.state.email,
          phone : this.state.phone

         }
            console.log(obj)
         // using axios to send data(object) 

         axios.post(`http://localhost:3001/contacts/add`,obj).
         then(res => {console.log(res.data) ; console.log(obj)})
   
          
         // clearing the state
         this.setState({
          name: '',
          email :'',
          phone :''

         })
    }

    render(){

        return (
          
          <form onSubmit={this.onSubmit}>
              <h1>Add contact</h1>
            <label>Name:</label>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/><br/>
            <label>email:</label>
            <input onChange={this.handleChange}  type="text" name="email" value={this.state.email}/><br/>
            <label>phone:</label>
            <input onChange={this.handleChange} type="text" name="phone" value={this.state.phone}/><br/>
            <button type="submit">add</button>
            </form>
        
        

        )



    }




}



export default AddContact;