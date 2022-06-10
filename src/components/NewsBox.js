import React, { Component } from 'react'
import noimage from './noimage.jpg'

export default class NewsBox extends Component {

    timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return "<small class='numberago'>"+Math.floor(interval) + "Y</small> <small>ago</small>";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return "<small class='numberago'>"+Math.floor(interval) + "M</small> <small>ago</small>";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return "<small class='numberago'>"+Math.floor(interval) + "D</small> <small>ago</small>";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return "<small class='numberago'>"+Math.floor(interval) + "H</small> <small>ago</small>";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return "<small class='numberago'>"+Math.floor(interval) + "m</small> <small>ago</small>";
        }
        return "<small class='numberago'>"+Math.floor(seconds) + "S</small> <small>ago</small>";
    }

    mytime(publishedAt){
        const d = new Date(publishedAt);
        return(this.timeSince(d));
    }

    render() {
    let {title, discription, imageurl, url, publishedAt, source} = this.props;
    return (
      <>
          <a href={url} className="card-a" target="__blank">
            <div className="card" style={{position:"relative"}}>
                <span className="badge rounded-pill text-bg-danger">{source}</span>
              <div style={{position:"relative"}}>
                <img src={imageurl? imageurl: noimage} className="card-img-top" alt="..." />
                <p className="timeago" dangerouslySetInnerHTML={{__html: this.mytime(publishedAt)}}></p>
              </div>
              <div className="card-body">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                </div>
                <span className="btn btn-dark" target="__blank">Read More...</span>
              </div>
            </div>
          </a>
        </>
    )
  }
}
