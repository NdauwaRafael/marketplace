import React, {Component, Fragment} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Header from './Layout/Header';
import SideMenu from './Layout/SideBar'
import AppRoutes from '../Router';
import {connect} from 'react-redux';
import { loadUser } from '../Redux/actions/auth';
import {bindActionCreators} from "redux";
import {loadUsers} from "../Redux/actions/users";

class App extends Component {
    componentDidMount() {
        this.props.loadUser();
        this.props.loadUsers();
    }

    render() {
        const {isAuthenticated} = this.props;
        if (isAuthenticated) {
            return (
                <Router>
                    <Fragment>
                        <Header/>
                        <SideMenu/>
                        <div className="app_container">
                            {
                                AppRoutes
                            }
                        </div>
                    </Fragment>
                </Router>
            );
        } else {
            return (
                <Router>
                    <Fragment>
                        {
                            AppRoutes
                        }
                    </Fragment>
                </Router>
            );
        }
    }
}


function mapStateToProps({auth: {isAuthenticated}}) {
    return {
        isAuthenticated
    };
}

const mapDispatchToProps = (dispatch) => ({
    loadUser: bindActionCreators(loadUser, dispatch),
    loadUsers: bindActionCreators(loadUsers, dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


