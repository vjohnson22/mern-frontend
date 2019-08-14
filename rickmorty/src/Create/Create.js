import React from 'react'
import axios from 'axios'

class Create extends React.Component{
    constructor(){
        super()

        this.state={
            name:"",
            season: "",
            summary: "",
            mediumImg:"",
            originalImg:""
            
       }
        
    }
    componentDidMount(){
        
        // axios.post()
    }
    createPost = (e) => {
        e.preventDefault()
        const postBody = {
            "name": `${this.state.name}`,
            "season":`${this.state.season}`,
            "summary": `${this.state.summary}`,
            "image": {
                "medium": `${this.state.mediumImg}`,
                "original": `${this.state.originalImg}`
            }
        }
        console.log(postBody)
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
        return(
            <form>
                <input name = 'name' placeholder="Name" onChange={this.updateName}></input>
                <input placeholder="Season" onChange={this.updateSeason}></input>
                <input placeholder="Summary" onChange={this.updateSummary}></input>
                <input placeholder="Medium Image URL" onChange={this.updateMediumImage}></input>
                <input placeholder="Original Image URL" onChange={this.updateOriginalImage}></input>
                <button onClick={this.createPost}>Submit</button>
            </form>
        )
    }

}

export default Create