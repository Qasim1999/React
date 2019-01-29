import React,{Component} from "react";
import {Link} from "react-router-dom";

class nav extends Component{

    render(){
        return (            
        <nav className="nav">
        
        <img src="../Img/logo.png"/>
            <ul>
                <li>
                    <Link className="nav-link" to = "/">Home</Link>
                </li>

                <li>
                    <Link className="nav-link" to = "/about">About</Link>
                </li>

                <li>
                    <Link className="nav-link" to = "/service">Service</Link>
                </li>

                <li>
                    <Link className="nav-link" to = "/profile">Team</Link>
                </li>

                <li>
                    <Link className="nav-link" to = "/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        );
    }
}

export default nav;