import React, {Component} from "react";
import About from './cmp/About';
import Home from './cmp/Home';
import Forms from './cmp/Forms';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Nav from './cmp/Nav';

class App extends Component{
    render(){
        return (
            <div>
                <Router>

                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/forms" component={Forms} />

                </Router>
            </div>
        )
    }
}
export default App;