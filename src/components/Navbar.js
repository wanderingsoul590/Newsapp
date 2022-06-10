import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Newsc from './Newsc'

export default class Navbar extends Component {

  searchnews = () =>{

  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{margin: "0 0 30px 0"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Day News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">All News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/science">Sience</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
            </ul>      

          </div>
        </div>
      </nav>
      </>
    )
  }
}
