import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import '../css/AddContact.css'
import {addContact} from '../../actions/contactActions';

class AddContact extends Component {
  state = {
    firstName:'',
    surName:'',
    phone_number: '',
  };

handleSubmit = (e) => {
    const {firstName, surName, phone_number} = this.state;
    const newContact = {
      name: firstName + ' ' + surName,
      phone_number: phone_number
    };
    //// SUBMIT CONTACT ////
   this.props.addContact(newContact)
    // Clear State
    this.setState({
      firstName: '',
      phone_number: '',
      surName:''
    });
    this.props.history.push('/');//redirect to home page
  };

  handleChange= e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstName, surName,phone_number} = this.state;

    return (
        <div className="container">
        <Link to="/">
        <i className="fa fa-arrow-left arrow" aria-hidden="true"></i>
        </Link>
        <form onSubmit={this.handleSubmit}>
        <div className="inputImage">
        <div className="cameraImage">
        <i className="fas fa-camera camera"></i>
        </div>
        <div className="Names">
        <label htmlFor="firstName" className="firstName">Name</label><br/>
        <input 
          type="text" 
          name="firstName" 
          value={firstName} 
          required placeholder="John" 
          onChange={this.handleChange}
          /><br/><br/>
        <label htmlFor="surName" className="lastName">Surname</label><br/>
        <input 
          type="text" 
          name="surName"
          required placeholder="Smith"
          value={surName} 
          onChange={this.handleChange}/>
        </div>
        </div>
        <div className="phoneNumber">
        <label htmlFor="phone_number">mobile</label><br/>
        <input 
          type="number" 
          required placeholder="+111 111 111" 
          name="phone_number" 
          value={phone_number} 
          onChange={this.handleChange}
        /><br/><br/>
        <button type="submit" className="">
        <i className="fa fa-plus" aria-hidden="true"></i>
           Add Number
        </button>
        </div>
        </form>
       </div>
    
    );
  }
}

export default connect(null,{addContact})(AddContact);
