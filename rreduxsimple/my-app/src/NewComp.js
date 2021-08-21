import React, {Component} from 'react'
import {connect} from 'react-redux';

class NewComp extends Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         message: "subscribe to simplilearn"
    //     }
        
    // }
    // buttonChange = () => {
    //     this.setState({
    //         message:"thanks for subscribing"
    //     })
        
    // }
    
    // render(){
    //     return (
    //         <div>
    //             <h3>{this.state.message}</h3>
    //             <button onClick={this.buttonChange}>subscribe</button>
               
    //         </div>
    //     )
    // }

    render(){
        return (
            <div>
                <h3>{this.props.message}</h3>
                <button onClick={this.props.buttonChange}>subscribe</button>
               
            </div>
        )
    }
}

const mapStatetoProps = state => {
        return{
            message:state.message
        }
    }
const mapDispatchtoProps = dispatch => {
    return {
        buttonChange: () => dispatch({type: 'message change'})
    }
}
 export default connect(
     mapStatetoProps,
     mapDispatchtoProps
 )(NewComp)
