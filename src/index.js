import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//HashRouter instead of browserRouter to get Route working on gh-pages(GitHub)
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//import Nav from './containers/Nav'
import NavTest from './containers/NavTest'
import Footer from './components/Footer'
import NZ from './containers/NZ'
import India from './containers/India'
import Technology from './containers/Technology'
import Science from './containers/Science'
import Business from './containers/Business'
import Sports from './containers/Sports'
import Entertainment from './containers/Entertainment'
import NotFound from './containers/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import 'semantic-ui-css/semantic.min.css'
// https://www.freecodecamp.org/news/the-basic-design-patterns-all-developers-nee
// d-to-know/ https://www.freecodecamp.org/news/youtube-clone-app/
// https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-htt
// p-request-in-javascript-954ce8c95aaa/

//https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
//https://www.youtube.com/watch?v=1wDzEjXbblM

const routing = (
    <Router>
    <div className="main">
      <div className="heading">
        <Jumbotron>
          <h1>Latest News</h1>
          <p>Latest news using free News API <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>(https://newsapi.org)</a></p>
        </Jumbotron>
      </div>
      <NavTest />
      <Switch>
         <Route exact path="/" component={App} />
        <Route path="/containers/NZ/" component={NZ} />
        <Route path="/containers/India" component={India} />
        <Route path="/containers/Technology" component={Technology} />
        <Route path="/containers/Science" component={Science} />
        <Route path="/containers/Business" component={Business} />
        <Route path="/containers/Sports" component={Sports} />
        <Route path="/containers/Entertainment" component={Entertainment} />
          {/* <Route component={App} />  */}
        <Route component={NotFound}/> 
      </Switch>
      <Footer />
    </div>
  </Router>
)

/* ReactDOM.render(<App/>, document.getElementById('root')); */
ReactDOM.render(routing, document.getElementById('root'));
