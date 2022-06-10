import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsc from './components/Newsc'
import Home from './components/Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import Scralltotop from './components/Scralltotop';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state={
    progress : 0,
    search: undefined
  }

  setprogressBar = (value) => {
    this.setState({
      progress:value
    });
  }

  render() {
    return (
    <>
    <Navbar />
    <LoadingBar
        transitionTime={0}
        loaderSpeed={500}
        waitingTime={700}
        color='#FF4C29'
        progress={this.state.progress}
      />
    <Scralltotop/>
      <Routes>
        <Route exact path="/home" element={<Home />} /> 
        <Route index element={<Newsc progressBar={this.setprogressBar}  key="general" Category="general" />} />
        <Route exact path="/business" element={<Newsc progressBar={this.setprogressBar}  key="business" Category="business" />} /> 
        <Route exact path="/entertainment" element={<Newsc progressBar={this.setprogressBar}  key="entertainment" Category="entertainment" />} /> 
        <Route exact path="/health" element={<Newsc progressBar={this.setprogressBar}  key="health" Category="health" />} /> 
        <Route exact path="/science" element={<Newsc progressBar={this.setprogressBar}  key="science" Category="science" />} /> 
        <Route exact path="/sports" element={<Newsc progressBar={this.setprogressBar}  key="sports" Category="sports" />} /> 
        <Route exact path="/technology" element={<Newsc progressBar={this.setprogressBar}  key="technology" Category="technology" />} /> 
      </Routes>
    </>
    )
  }
}

