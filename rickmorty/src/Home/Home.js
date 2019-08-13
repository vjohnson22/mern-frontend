import React from 'react'
import axios from 'axios'

class Home extends React.Component{
    constructor(){
        super()

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('https://mern-backend-vic.herokuapp.com')
            
            .then(res => {
                this.setState({data:res.data})
                console.log(res.data)
            }) 
    }
    render(){
        const episodes = this.state.data.map((episode, i) => {
            return <img key = {i} src={episode.image.medium}/>
            // create link with this
            })
        return(
                <div>
                    <h1>Episodes</h1>
                    <ul>{episodes}</ul>
                </div>  
        )
        
    }
}

export default Home