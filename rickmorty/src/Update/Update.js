import React from 'react'
import axios from 'axios'


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
    


    // update = () => {
    //     axios.update(`https://mern-backend-vic.herokuapp.com/${this.state.name}`)
    //         .then(res => {console.log(res)})
    //         .catch((error) => {
    //             console.log(error)
    //           })
    //           .finally( i => {
    //             this.setState({
    //                name:"",
    //                season: "",
    //                summary: "",
    //                mediumImg:"",
    //                originalImg:""
                   
    //           })



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
                <input placeholder="Season" onChange={this.updateSeason} value = {this.state.season}></input>
                <input placeholder="Summary" onChange={this.updateSummary} value = {this.state.summary}></input>
                <input placeholder="Medium Image URL" onChange={this.updateMediumImage} value = {this.state.mediumImg} ></input>
                <input placeholder="Original Image URL" onChange={this.updateOriginalImage} value = {this.state.originalImg}></input>
                <button onClick={this.submitNew}>Submit</button>
            </form>
            </div>
        )
    }
}

export default Update