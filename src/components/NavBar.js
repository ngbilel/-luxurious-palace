import React, { Component } from 'react'
import logo from '../images/logo.ico'
import  { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class NavBar extends Component {

    state = {
        isOpen: false
    }

    handelToggel = () =>{
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
             <nav className="navbar">
                 <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={logo} className="logo" alt="hotel" />
                        </Link>
                        <Button type="botton" className="nav-btn" onClick={this.handelToggel}>
                            <FaAlignRight className="nav-icon"/>
                        </Button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links" : "nav-links show-nav"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                 </div>
             </nav>
        )
    }
}
