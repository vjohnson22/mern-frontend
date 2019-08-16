import React from 'react'
import axios from 'axios'

let updateValue

class Update extends React.Component {
    constructor() {
        super()

        this.state =  {
            episodes: [],
            name:"",
            season: "",
            summary: "",
            mediumImg:"",
            originalImg:""
 
        }
    }
 
  
 componentDidMount() {
        axios.get('https://mern-backend-vic.herokuapp.com')
            .then(res => {
                this.setState({episodes: res.data})
            })
    }
    
    updateSeasonClick = (e) => {
        e.preventDefault()
        updateValue = {season: this.state.season}
        this.update()
    }
    updateSummaryClick = (e) => {
        e.preventDefault()
        updateValue = {summary: this.state.summary}
        this.update()
    }

    update = () => {
                        
        axios.patch(`https://mern-backend-vic.herokuapp.com/${this.state.name}`, updateValue)
            .then(res => {console.log(res)})
            .catch((error) => {
                console.log(error)
              })
            .finally( i => {
                this.setState({
                   name:"",
                   season: "",
                   summary: "",
                   mediumImg:"",
                   originalImg:""
                   
              })
              updateValue = undefined
            })
        }



    updateName= (e) => {
        this.setState({name: e.target.value})
    }
    updateSeason= (e) => {
        this.setState({season: e.target.value})
    }
    updateSummary= (e) => {
        this.setState({summary: e.target.value})
    }
    updateMediumImage= (e) => {
        this.setState({mediumImg: e.target.value})
    }
    updateOriginalImage= (e) => {
        this.setState({originalImg: e.target.value})
    }
    render(){
        let episodes = this.state.episodes.map((episode, i) => {
            return <li key={i}>{episode.name}</li>
        })
        return(
            <div>
                <ul>
                    {episodes}
                </ul>
            <form>
                <input name = 'name' placeholder="Name" onChange={this.updateName} value = {this.state.name}></input>
                <div>
                    <input placeholder="Season" onChange={this.updateSeason} value = {this.state.season}></input>
                    <button onClick={this.updateSeasonClick}>Update Season</button>
                </div>
                <div>
                    <input placeholder="Summary" onChange={this.updateSummary} value = {this.state.summary}></input>
                    <button onClick={this.updateSummaryClick}>Update Summary</button>
                </div>
                
            </form>
            </div>
        )
    }
}

export default Update