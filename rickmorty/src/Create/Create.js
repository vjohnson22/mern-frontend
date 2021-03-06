import React from 'react'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'

 

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
       
    
    
    submitNew= (e) => {
        e.preventDefault()
        const postBody = {
            "name": this.state.name,
            "season":this.state.season,
            "summary": this.state.summary,
            "image": {
                "medium": this.state.mediumImg,
                "original": this.state.originalImg
            }
        }
        console.log(postBody)
     
        axios.post('https://mern-backend-vic.herokuapp.com', postBody)
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
        return(
            <form>
                <input name = 'name' placeholder="Name" onChange={this.updateName} value = {this.state.name}></input>
                <input placeholder="Season" onChange={this.updateSeason} value = {this.state.season}></input>
                <input placeholder="Summary" onChange={this.updateSummary} value = {this.state.summary}></input>
                <input placeholder="Medium Image URL" onChange={this.updateMediumImage} value = {this.state.mediumImg} ></input>
                <input placeholder="Original Image URL" onChange={this.updateOriginalImage} value = {this.state.originalImg}></input>
                <button onClick={this.submitNew}>Submit</button>
            </form>
        )
    }

}

export default Create