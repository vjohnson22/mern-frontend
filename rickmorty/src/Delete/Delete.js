import React from 'react'
import axios from 'axios'
 
class Delete extends React.Component{
    constructor() {
        super()

        this.state =  {
            episodes: [],
            delete: '' 
        }
    }
    componentDidMount() {
        axios.get('https://mern-backend-vic.herokuapp.com')
            .then(res => {
                this.setState({episodes: res.data})
            })
    }
    handleInput = (e) => {
        this.setState({delete: e.target.value})
    }

    delete = () => {
        axios.delete(`https://mern-backend-vic.herokuapp.com/${this.state.delete}`)
            .then(res => {
               this.setState({delete:""})
               })
            .then( i => {
                this.setState({ state: this.state })
            }   
            )
            .catch((error) => {
                console.log(error)
              })
            
            
    }

    render(){
        let episodes = this.state.episodes.map((episode, i) => {
            return <li key={i}>{episode.name}</li>
        })
        return (
            <div>
                <ul>
                    {episodes}
                </ul>
                <input placeholder='Episode to delete?' value = {this.state.delete} onChange= {this.handleInput}></input>
                <button onClick={this.delete}>Submit</button>
            </div>
        )
    }
}

export default Delete