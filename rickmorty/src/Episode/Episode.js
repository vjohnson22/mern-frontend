import React from 'react'
import axios from 'axios'

class Episode extends React.Component{
    constructor() {
        super()

        this.state = {
            info : []
        }
    }
    componentDidMount() {
        const baseUrl = 'https://mern-backend-vic.herokuapp.com'
        const episodeName = this.props.match.params.name
        let url = `${baseUrl}/${episodeName}`
        
        axios.get(url)
            .then(res => 
                this.setState({info: [res.data]})) 


    }
    render() {
        const episodeInfo = this.state.info.map( (info, i) =>{
            let picture
            if (info.image.original != null){
                picture = <img src={info.image.original} alt={info.name}/> 
            }else if (info.image.medium != null){
                picture = <img src={info.image.medium} alt={info.name}/> 
            }else{
                picture = <div></div>
            } 

            return(
                <div key ={i}>
                    {picture}
                    <h1>Name:{info.name}</h1>
                    <h2>Season: {info.season}</h2>
                    <p>Summary: {info.summary}</p>
                </div>
            )
        })

        return(
            <div>
                {episodeInfo}      
            </div>
        )
    }
}

export default Episode