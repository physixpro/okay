import React, {Component} from "react";

class Practice extends Component{
    constructor(props){super(); this.state={heading: "Welcome to the new beginning of react", word:"okay make sense" }}
    render(){
        return(
            <div>
                <h2 onClick={()=>this.setState({word:"it does"})}>{this.state.word}</h2>
                
                <h1 className="header" onClick={()=> this.setState({heading:"cool"})}>{this.state.heading}</h1>
            </div>

        )
    }
}

export default Practice;