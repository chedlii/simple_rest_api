import React from "react";
import ContactList from "./contactList"
import axios from 'axios';


class ContatcsContainer extends React.Component {
    constructor(){
        super()

        this.state= {
            contacts : []
        }


    }

    componentDidMount() {
        axios.get(`http://localhost:3001/contacts`).then(res=>{this.setState({contacts :res.data});console.log(res)}).
        catch(err=>console.log(err))
        }
      

    render(){

        return(
             <div>
                 <h1>Contact list</h1>
                 <ContactList contacts ={this.state.contacts}/>
             </div>

        )
    }
}



export default ContatcsContainer;