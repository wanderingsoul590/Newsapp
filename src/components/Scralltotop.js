import React, { Component } from 'react'

export default class Scralltotop extends Component {

    componentDidMount= () =>{
        // window.onscroll = this.scrollFunction();
        window.addEventListener('scroll', (e)=> {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrallBtn").style.display = "block";
            } else {
                document.getElementById("scrallBtn").style.display = "None";
            }
        });
    }

    topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  render() {
    return (
      <div>
        <p id="scrallBtn" onClick={this.topFunction}>Top</p>
      </div>
    )
  }
}
