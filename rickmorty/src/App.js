import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home/Home'
import Episode from './Episode/Episode'
import Create from './Create/Create'
import Delete from './Delete/Delete'
import Update from './Update/Update'
import SignUpForm from './SignUpForm/SignUpForm'
import axios from 'axios'

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
  
  }
  // setAppState = (episode) => {
  //   this.setState({episode})
  // }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post(' https://mern-backend-vic.herokuapp.com/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    axios.post(' https://mern-backend-vic.herokuapp.com/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }
  render () {
  return (
      <div>
        <nav>
          <Link to='/'>
          < h1>Home</h1>
          </Link>
          <Link to="/create/new"><h1>Create</h1></Link>
          <Link to='/episodes/update'> <h1>Update</h1></Link>
          <Link to="/episodes/delete"><h1>Delete</h1></Link>
          <Link to="/user/signup"><h1>Sign Up</h1></Link>
        </nav>
        <main>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/:name' render = { routerProps => (<Episode setAppState = {this.setAppState} {...this.state} {...routerProps} />)}/>
          <Route  exact path = '/create/new' component= {Create}/>
          <Route exact path = '/episodes/delete' component = {Delete}/>
          <Route exact path = '/episodes/update' component = {Update}/>
  <Route exact path = "/user/signup" render = {<SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />}/>
        </main>
      </div>
    )
  }
}

export default App;
