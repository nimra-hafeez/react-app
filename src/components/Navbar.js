import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
      <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
         
        </ul>
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input id="stackedCheck1" onClick={props.toggleMode} class="form-check-input" type="checkbox" data-toggle="toggle" checked/>
        <label htmlfor="stackedCheck1" class="form-check-label">Enable Dark Mode</label>
      </div>
{/* <input type="checkbox" onClick={props.toggleMode} checked data-toggle="toggle" data-style="ios"></input> */}
        
        <form className="d-flex" role="search">
          <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        {/* <input type="checkbox" checked data-toggle="toggle" data-onstyle="secondary" data-offstyle="success"></input> */}
        {/* <div className={`form-check form-switch text-${props.mode==='white'?'grey':'white'}`}>

          <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckOnfault"/>
          <input className='form-check-label' for="flexSwitchCheckOnfault">Enable DarkMode</input>
        </div> */}
      </div>
    </div>
  </nav>
     
      </>
  
    );
  }
  
 
  Navbar.propTypes= {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
  }
  Navbar.defaultProps ={
    title: 'set title here',
    aboutText: 'About'
  }