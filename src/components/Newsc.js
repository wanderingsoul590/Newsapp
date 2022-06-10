import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';

export default class Newsc extends Component {

    mybutton = document.getElementById("btn-back-to-top");
    
    constructor(props){
        super();
        this.state = {
            articles: [],
            page: 1,
            pagecount:1,
            loading: false,
            apiurl : `https://newsapi.org/v2/top-headlines?country=in&category=${props.Category}&apiKey=a839ec25e4324b8a83f72f27ffa23a63&page=`,
            country: 'in',
            apistatus: {"status":"true"}
        }

        props.Category === 'general' ? (document.title = 'All News - DayNews') : (document.title = `${props.Category.charAt(0).toUpperCase() + props.Category.slice(1)} - DayNews`)
    }
    
    scralltotop = () =>{

    }

    async componentDidMount(){
        this.props.progressBar(10);
        let url = `${ this.state.apiurl+(this.state.page)}&pageSize=8`;
        axios.get(url)
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        parsedData.status === "error" ? this.setState({apistatus: parsedData}):
        this.props.progressBar(70);
        this.setState({ 
            articles: parsedData.articles, 
            loading: false,
            pagecount: parsedData.totalResults
        }, this.props.progressBar(100));
        
    }

    searchfoo = () => {
      this.props.search === undefined ? console.log('undf'): console.log('defined')
    }

    fetchMoreData= async() => {
      let url = `${ this.state.apiurl+(this.state.page + 1)}&pageSize=8`;
      this.setState({page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedData = await data.json();
        parsedData.status === "error" ? this.setState({apistatus: parsedData}):
        this.setState({ 
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }

    fetchurl= async() => {
      this.props.progressBar(10);
      let url = `${ this.state.apiurl+1}&pageSize=8`;
      let data = await fetch(url);
      let parsedData = await data.json();
      parsedData.status === "error" ? this.setState({apistatus: parsedData}):
      this.props.progressBar(70);
      this.setState({ 
        articles: parsedData.articles,
        page: 1,
        loading: false
      },this.props.progressBar(100) );
      
    }

    countrychange= async(e) => {
        this.setState({
            apiurl: `https://newsapi.org/v2/top-headlines?country=${e.target.value}&category=${this.props.Category}&apiKey=a839ec25e4324b8a83f72f27ffa23a63&page=`
        }, this.fetchurl)
        
    }


  render() {
    return (
        <>
        {this.searchfoo()}
        {/* <div className="container d-flex justify-content-end align-items-center my-3">
            <select className="form-select" aria-label="Default select example" style={{width: '250px'}} onChange={this.countrychange} defaultValue={"in"}>
                <option value="in">India</option>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="ch">Switzerland</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="cz">Czech Republic</option>
                <option value="dk">Denmark</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="gb">United Kingdom</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong, SAR China</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="kr">Korea (South)</option>
                <option value="lt">Lithuania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russian Federation</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States of America</option>
            </select>
        </div> */}

        <center><h3>{this.props.Category.charAt(0).toUpperCase() + this.props.Category.slice(1)}</h3></center>

        {this.state.apistatus.status !== "error" ?  
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length/8 === this.state.page}
          loader={<Spinner/>}
        >
          <div className="container d-flex justify-content-center">
            <div className="row rowc" style={{justifyContent:"center"}}>
              {
                this.state.loading ? <Spinner/> :
                this.state.articles.map((element, i) => {
                  return (
                    <div className="col-md-3" key={i}>
                      <NewsBox
                        title={element.title}
                        discription={element.description}
                        imageurl={element.urlToImage}
                        url={element.url}
                        publishedAt={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        : 
        <div className="container">
          <p style={{color: "red"}}>{this.state.apistatus.message}</p>
        </div>
        }
        </>
    )
  }
}

