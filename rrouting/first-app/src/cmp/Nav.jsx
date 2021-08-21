import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                    <Link to="">Homee</Link>
                    <Link to="/about">About</Link>
                    <Link to="/forms">Forms</Link>
            </div>
        )
    }
}
export default Nav;