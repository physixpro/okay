import React, {Component} from "react";

class Practice extends Component{
    constructor(props){super(); this.state={heading: "Welcome to the new beginning of react" }}
    render(){
        return(
            <div>
                <h2>afd</h2>
                
                <h1 className="header" onClick={()=> this.setState({heading:"cool"})}>{this.state.heading}</h1>
            </div>

        )
    }
}

export default Practice;