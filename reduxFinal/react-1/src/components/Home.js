import React from "react";
import {connect} from 'react-redux';
import {addToCart} from '../Services/Actions/action'


// class NewComp extends Component{
//     console.log(props);
//     render(){
        
//         return(
//             <div>
//                 <h1>{this.props.message}</h1>
//                 <button type='submit' onClick={this.props.buttonChange}>subscribe</button>
//             </div>
//         )
//     }
// }
function Home(props){
    console.log("props",props.message);
    return(
        <div>
            <h1>{props.message.cardData.name}</h1>
            <button onClick={()=>props.addToCardHandler({price:2000,name:"i phone 12"})}>submit</button>
        </div>
    )
}
const mapStateToProps =state=>({
    message:state.changereducers
})
const mapDispatchToProps = (dispatch) => ({
    addToCardHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home

