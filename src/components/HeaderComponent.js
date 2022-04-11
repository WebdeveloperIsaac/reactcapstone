import React,{Component} from "react";
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';
class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar dark color="primary">
                <div className="container">
                <NavbarBrand href="/">Isaac Restuarant</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                           <h1>Isaac Restuarant</h1>
                           <p>We take Inspiration from the worlds richest man ELon musk to deliver you good food and make you feel rich like musk</p> 
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </React.Fragment>            
        )
    }
}

export default Header;