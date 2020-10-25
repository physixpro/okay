import React, {Component} from "react";

class Instagram extends Component{
    constructor(props){super(props); this.state={value: "move on"}}
    render(){
        return(
            <div>
            <h1 onClick={()=> this.setState({value:"it works!"})}>{this.state.value}</h1>
            </div>

        );
    }
}

export default Instagram;