import React from 'react'

class Create extends React.Component{
    constructor(){
        super()

        this.state={
            name:"",
            season: "",
            summary: "",
            image: {
                medium:"",
                original:""
            }
        }
        
    }
    render(){
        return(
            <div>
                <input placeholder="Name"></input>
                <input placeholder="Season"></input>
                <input placeholder="Summary"></input>
                <input placeholder="Medium Image URL"></input>
                <input placeholder="Original Image URL"></input>
            </div>
        )
    }

}

export default Create