import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home/Home'
import Episode from './Episode/Episode'
import Create from './Create/Create'

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
          <Link to="/create/new"><h1>Create</h1></Link>
          <h1>Update</h1>
          <h1>Delete</h1>
        </nav>
        <main>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/:name' render = { routerProps => (<Episode setAppState = {this.setAppState} {...this.state} {...routerProps} />)}/>
          <Route  exact path = '/create/new' component= {Create}/>
        </main>
      </div>
    )
  }
}

export default App;
