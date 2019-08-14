import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home/Home'
import Episode from './Episode/Episode'

class App extends React.Component{
  constructor() {
    super()

    this.state = {}
  
  }
  setAppState = (episode) => {
    this.setState({episode})
  }
  render(){
  return (
      <div>
        <nav>
          <Link to='/'>
          < h1>Home</h1>
          </Link>
          <h1>Create</h1>
          <h1>Update</h1>
          <h1>Delete</h1>
        </nav>
        <main>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/:name' render = { routerProps => (<Episode setAppState = {this.setAppState} {...this.state} {...routerProps} />)}/>
        </main>
      </div>
    )
  }
}

export default App;
