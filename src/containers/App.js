import React, { Component } from "react";
import NewsArticles from "../components/NewsArticles";
import Footer from "../components/Footer";
import CarouselTop from "../components/CarouselTop";
//HashRouter instead of browserRouter to get Route working on gh-pages(GitHub)
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Nav from './Nav'
// import NZ from './NZ'
// import India from './India'
// import Technology from './Technology'
// import Science from './Science'
// import Business from './Business'
// import Sports from './Sports'
// import Entertainment from './Entertainment'
 import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component {
  constructor() {
    super();
    this.state = { source: "", carouselImg: [], isLoaded: false };
    this.setHeading = this.setHeading.bind(this);
  }

  componentDidMount() {
    let request_url =
      "https://newsapi.org/v2/top-headlines?language=en&country=us&pageSize=3&sortBy=popularity&apiKey=ab293b080e9a4d4dba6906e9a0782095";
    fetch(request_url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ carouselImg: data.articles, isLoaded: true });
        console.log("state", this.state.carouselImg);
      });
  }

  setHeading() {
    if (this.state.carouselImg.length !== 0)
      console.log(this.state.carouselImg);
    return this.state.carouselImg;
  }


  render() {
    // const { isLoaded } = this.state;
    // if (isLoaded) {
    //   const Home = () => (
    //     <div className="main">
    //       <CarouselTop setHeading={this.setHeading} state={this.state} />
    //       <NewsArticles source={this.state.source} />       
    //     </div>
    //   )
    //   return (
        // <Router>
        //   <div className="main">
        //     <div className="heading">
        //       <Jumbotron>
        //         <h1>Latest News</h1>
        //         <p>Latest news using free News API <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>(https://newsapi.org)</a></p>
        //       </Jumbotron>
        //     </div>
        //     <Nav />
        //     <Switch>
        //       <Route exact path="/" component={Home} />
        //       <Route path="/containers/NZ" component={NZ} />
        //       <Route path="/containers/India" component={India} />
        //       <Route path="/containers/Technology" component={Technology} />
        //       <Route path="/containers/Science" component={Science} />
        //       <Route path="/containers/Business" component={Business} />
        //       <Route path="/containers/Sports" component={Sports} />
        //       <Route path="/containers/Entertainment" component={Entertainment} />
        //       {/*   <Route component={App} /> */}
        //       {/* <Route component={NotFound}/> */}
        //     </Switch>
        //     <Footer />
        //   </div>
        // </Router>
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="main">
          <CarouselTop setHeading={this.setHeading} state={this.state} />
          <NewsArticles source={this.state.source} />
          <Footer />
        </div>
      );
    }
    return null;
  }
}


export default App;
