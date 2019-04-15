import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContatcsContainer from './conponents/contatcsContainer';
import AddContact  from './conponents/addContact';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Contacts app</h1>
        <button> <Link to="/contacts">contact List</Link></button>
        <button><Link to="/contact_add">Add Contact</Link></button>
       <Route  path='/contacts' component={ContatcsContainer}/>
        <Route path='/contact_add' component ={AddContact}/>
      </div>
      </Router>
    );
  }
}

export default App;
