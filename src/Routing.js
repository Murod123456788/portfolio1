import React from 'react'
import './styles/main.scss'
import './styles/animation.scss'
import HomeMain from './home/HomeMain';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutInfo from './home/AboutInfo';
import Portfolio from './portfolio/Portfolio'
import PageInfo from './portfolio/PageInfo';
function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain}/>
        <Route path="/" exact component={AboutInfo}/>
        <Route path="/portfolio" exact component={Portfolio}/>
       
      </Switch>
    </Router>
  );
}

export default Routing;
