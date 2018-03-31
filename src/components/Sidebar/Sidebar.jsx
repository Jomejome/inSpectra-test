import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../Header/HeaderLinks.jsx';

import logo from 'assets/img/inSpectra2.png';

import appRoutes from 'routes/app.jsx';
import NotificationSystem from 'react-notification-system';


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            // _notificationSystem: null
        }
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){

        return (
            <div id="sidebar" className="sidebar" data-color="black" >
                <div className="sidebar-background"></div>
                    <div className="logo">
                        <div className="logo-img">
                            <a href="#/dashboard"><img src={logo} alt="logo_image" onClick={() => this.props.handleClick ('tc', 'warning', 'gas leak detected!')} /></a>
                        </div>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        {
                            appRoutes.map((prop,key) => {
                                if(!prop.redirect)
                                    return (
                                        <li className={this.activeRoute(prop.path)} key={key}>
                                            <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
