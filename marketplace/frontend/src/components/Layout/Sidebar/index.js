import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../../Redux/actions/auth";
import {toggleMenu} from "../../../Redux/actions/ui";

class SideBar extends Component {
    render() {
        const {isAuthenticated, menuVisible} = this.props;
        if (isAuthenticated) {
            return (
                <aside className={`app_sidenav nav flex-column col-xs-12 col-md-12 ${menuVisible ? 'show_over' : ''}`} onClick={()=>this.props.toggleMenu()}>
                    <li className="nav-item">
                        <span className="title">Dashboard</span>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to="/activities">
                            <i className="material-icons">assessment</i>
                            Recent Activities
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <span className="title">Content Manger</span>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to="/produce/add">
                            <i className="material-icons">assessment</i>
                            Add Produce
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/produce/list">
                            <i className="material-icons">assessment</i>
                            View Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/reports">
                            <i className="material-icons">assessment</i>
                            Sales Reports
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <span className="title">Manage users</span>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/users/add">
                            <i className="material-icons">assessment</i>
                            Add User
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/users/list">
                            <i className="material-icons">assessment</i>
                            All Users
                        </NavLink>
                    </li>


                    <li className="nav-item">
                        <span className="title">Super Administrator</span>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/roles/add">
                            <i className="material-icons">assessment</i>
                            Add Categories
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/roles/list">
                            <i className="material-icons">assessment</i>
                            View Categories
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <button  className="nav-link" onClick={()=>this.props.logout()}>
                            <i className="material-icons">power</i>
                            Logout
                        </button>
                    </li>


                </aside>
            )
        } else {
            return (<div/>)
        }

    }
}

const mapStateToProps = ({auth: {isAuthenticated}, ui: {menuVisible}}) => {
    return {
        isAuthenticated,
        menuVisible
    }
};
const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logoutUser, dispatch),
    toggleMenu: bindActionCreators(toggleMenu, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
