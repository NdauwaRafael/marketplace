import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {logoutUser} from "../../../Redux/actions/auth";
import {withRouter} from 'react-router-dom';
import {toggleMenu} from "../../../Redux/actions/ui";

class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    logout() {
        this.props.logout();
        this.props.history.push('/login')
    }

    toggleMenu(){
        this.props.toggleMenu()
    }
    render() {
        const {isAuthenticated, user} = this.props;
        if (isAuthenticated) {
            return (
                <nav className="navbar pharmacy_nav navbar-expand-lg navbar-dark">
                    <a className="navbar-brand pharmacy_nav__logo">
                        <h3>Marketplace</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={()=>this.toggleMenu()}
                            data-target="#navbarResponsive1"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse pharmacy_nav__menus" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <ul className="my-2 my-lg-0 navbar-nav pharmacy_nav__action">
                            <li className="nav-item dropdown">
                                <a className="nav-link pharmacy_nav__action__item dropdown-toggle"
                                   data-toggle="dropdown"
                                   href="#" id="download" aria-expanded="false">
                                    <i className="material-icons">
                                        person
                                    </i>
                                    {user.first_name} {user.last_name}
                                    <span className="caret"/></a>
                                <div className="dropdown-menu" aria-labelledby="download">
                                    <a className="dropdown-item">
                                        Profile
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item" href="../4/litera/bootstrap.min.css">Settings</a>
                                    <a className="dropdown-item" href="../4/litera/bootstrap.css">Help</a>
                                    <div className="dropdown-divider"/>
                                    <a className="dropdown-item">FAQs</a>
                                    <a className="dropdown-item" onClick={() => this.logout()}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (<div/>)
        }

    }
}

const mapStateToProps = ({auth: {isAuthenticated, user}}) => ({
    isAuthenticated,
    user
});

const mapDispatcToProps = (dispatch) => ({
    logout: bindActionCreators(logoutUser, dispatch),
    toggleMenu: bindActionCreators(toggleMenu, dispatch)
});
export default connect(mapStateToProps, mapDispatcToProps)(withRouter(Header));
