import React from 'react';
import '../css/Header.css'

class Header extends React.Component{
    render(){
        return(
                <div className="card-body header">
                <div className="row">
                <div className="col col1">
                <div className="phone">
                <i className="fas fa-phone phoneIcon " aria-hidden="true"></i>
                <i className="fas fa-ellipsis-h points"></i>
                </div>
                <p className="parMB">BM</p>
                </div>
                <div className="col-3 col2">
                <i className="fas fa-id-badge icon ">
                </i>
                <p> Admin Admin</p>
                <i className="fas fa-sort-down"></i>
                </div>
                </div>
                </div>
               )
               }
               }

export default Header;