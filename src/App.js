import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import home from './Components/home'
import eacharticle from './Components/eachArticle'

class App extends React.Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/article" component={eacharticle} />
          <Route exact path="/home" component={home} />
          <Route path="/" component={home} />
          </Switch>
        </Router>
      </div>
      
    )}
}


export default App;
