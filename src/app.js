import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
    return(
       <Provider store={store}>
        <Router>
        <div className="App">
          <Header />
           <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
       </Provider>
        
)
}
export default App;