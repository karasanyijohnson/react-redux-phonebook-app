import React  from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getContact ,updateContact} from '../../actions/contactActions'


class EditContact extends React.Component {
  state = {
    phone_number: '',
    firstName:'',
    surName:'',
  };
// this will return the input edit form
UNSAFE_componentWillReceiveProps(nextProps,nextState){
  // const nameArray = this.state.name.split(" ");
  // console.log(this.state.name);
  // console.log(nameArray[0]);

  const {name,phone_number}= nextProps.contact;
  this.setState({name, phone_number})
    const nameArray = name.split(" ");
    if(nameArray.length > 2){
      this.setState({firstName: nameArray[0]})
      this.setState({surName: nameArray(1, nameArray.length)})
    }else{
      this.setState({firstName: nameArray[0]})
      this.setState({surName: nameArray[1]})
    }
    console.log(this.state.firstName)
    console.log(this.state.surName)

}
componentDidMount(){
  const {id}= this.props.match.params;
  this.props.getContact(id)
}
handleSubmit = (e) => {
    e.preventDefault();

const fullName = this.state.firstName + " " + this.state.surName
const name = fullName;
const phone_number = this.state.phone_number;
const { id } = this.props.match.params; // to match the exact id to be updated
const updContact = {
  id,
  name,
  phone_number
};
    //// UPDATE CONTACT ////
this.props.updateContact(updContact);
    // Clear State
    this.setState({
      name: '',
      phone_number: '',
    });

    this.props.history.push('/');
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { surName,firstName,phone_number} = this.state;

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
       <label htmlFor="firstName" className="firstName">Name</label><br/><br/>
       <input 
       type="text" 
       name="firstName" 
       value={firstName} 
       onChange={this.handleChange}
       /><br/><br/>
      <label htmlFor="surName" className="lastName">Surname</label><br/><br/>
      <input 
      type="text" 
      name="surName"
      value={surName} 
      onChange={this.handleChange}/>
      </div>
      </div>
      <div className="phoneNumber">
      <label htmlFor="mobileNbr">mobile</label><br/>
      <input 
      type="text" 
      placeholder="+111 111 111" 
      name="phone_number" 
      value={phone_number} 
      onChange={this.handleChange}
      /><br/><br/>
      <button type="submit" >
      <i className="fa fa-plus" aria-hidden="true"></i>
        Edit Contact
       </button>
      </div>
      </form>
     </div>
    );
  }
}
 
const mapStateToProps= (state)=>({
 contact:state.contact.contact
})
export default connect(mapStateToProps, {getContact,updateContact}) (EditContact);
