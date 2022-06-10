import React, { Component } from 'react'
import loader from './loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <center><img className="text-center" src={loader} style={{width:'50px'}} alt="..." /></center>
      </div>
    )
  }
}
