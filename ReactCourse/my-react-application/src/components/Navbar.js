import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar(props){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-info" to="/">{props.title}</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mydiv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mydiv">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={({isActive}) =>{
            return {color:isActive?'tomato':''}
          }} 
          className="nav-link active text-light" 
          aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive}) =>{
            return {color:isActive?'tomato':''}
          }} 
          className="nav-link text-light" to="/about" state={{myname:'Amarendra'}}>{props.about}</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact/7205382178">{props.contact}</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: 'Application Name',
    about: 'About',
    contact:'Contact'
}


