import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home/Home'
import Episode from './Episode/Episode'
import Create from './Create/Create'
import Delete from './Delete/Delete'
import Update from './Update/Update'

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
          <Link to='/episodes/update'> <h1>Update</h1></Link>
          <Link to="/episodes/delete"><h1>Delete</h1></Link>
        </nav>
        <main>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/:name' render = { routerProps => (<Episode setAppState = {this.setAppState} {...this.state} {...routerProps} />)}/>
          <Route  exact path = '/create/new' component= {Create}/>
          <Route exact path = '/episodes/delete' component = {Delete}/>
          <Route exact path = '/episodes/update' component = {Update}/>
        </main>
      </div>
    )
  }
}

export default App;
