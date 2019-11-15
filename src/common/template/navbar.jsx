import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import If from '../operator/if'
import ReviewSearch from '../../reviews/reviewSearch'
import './custom.css'
const Navbar = props => (
  <nav className="main-header navbar navbar-expand-md navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="navbar-brand">
          <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png"
          alt="Reviewing Logo" className="brand-image img-circle elevation-3"
          style={{opacity: ".8", marginRight: "5px"}}/>
          <span className="brand-text font-weight-light">Reviewing</span>
        </Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/reviews" className="nav-link">Reviews</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
    </ul>
    <If show={props.location.pathname === '/' ? false : true}>
      <ReviewSearch/>
    </If>
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button id="control-sidebar" className="nav-link" data-widget="control-sidebar">
          <i className="fas fa-th-large"></i>
        </button>
      </li>
    </ul>
  </nav>
)


export default withRouter(Navbar)
