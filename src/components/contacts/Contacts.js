import React from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import {getContacts} from '../../actions/contactActions';
import {Link} from 'react-router-dom'
import '../css/contacts.css'

class Contacts extends React.Component {
  componentDidMount(){
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
         Phone book manager
        </h1>
        <div className="row bgsuccess">
        <div className="col">Name</div>
        <div className="col">Phone Number</div>
        <div className="col">Edit</div>
        <div className="col">Delete</div>
        </div>
        {contacts.map(contact =>(
         <Contact key={contact.id} contact={contact} />
        ))}<br/>
         <Link to="/contact/add" >
        <button>
        <i className="fas fa-plus" /> Add Contact
        </button>
        </Link>
      </React.Fragment>
    );
  }
}; 

const mapStateToProps=(state)=>({
  //we access this from redux state which is "contact"
  contacts:state.contact.contacts
});

export default connect(
  mapStateToProps,
  {getContacts}) (Contacts);
