import axios from "axios";
import React from "react";

class App extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            posts :[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts:response.data})
                console.log(response);
            })
    }

    render(){
        const {posts}=this.state
        return (
            <div>
                {posts.map(post => <div key={post.id}>{post.userId}</div>)}
            </div>
        )
    }
}
export default App;