import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DeleteContact} from '../../actions/contactActions';

class Contact extends Component {
//// DELETE CONTACT ////
onDeleteClick = id => {  
this.props.DeleteContact(id);
  };

  render() {
    const { id, name, phone_number} = this.props.contact;
    return (
        <div className="row">
        <div className="col">{name}</div>
        <div className="col">{phone_number}</div>
        <div className="col">
        <Link to={`contact/edit/${id}`}>
        <i className="fas fa-pencil-alt" />
        </Link> 
        </div>
        <div className="col">
        <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id)}/>
        </div>
        </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  DeleteContact:PropTypes.func.isRequired
};

export default connect(null,{DeleteContact}) (Contact);
