import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home/Home'

class App extends React.Component{
  
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
          <Route component = {Home}/>
        </main>
      </div>
    )
  }
}

export default App;
