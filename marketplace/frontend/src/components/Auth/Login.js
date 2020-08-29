import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import LoginForm from './partials/LoginForm';
import {loginUser} from '../../Redux/actions/auth';
import {bindActionCreators} from "redux";
import {Redirect} from "react-router-dom";

class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            errors: {
                username: '',
                password: ''
            },
            loginError: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {authError} = this.props;
        if (prevProps.authError !== authError) {
            if (authError.username || authError.password) {
                this.setState({
                    errors: authError
                })
            }
            ;
            if (authError.non_field_errors) {
                this.setState({
                    loginError: authError.non_field_errors
                });
                this.setState({
                    errors: {username: '', password: ''}
                });
            }
        }
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let user = Object.assign({}, this.state.user);
        user[field] = value;
        this.setState({
            user
        })
    }

    handleSave(e) {
        e.preventDefault();
        this.props.loginUser(this.state.user)
    }

    render() {
         const {from} = this.props.location.state || { from: {pathname: '/' }};
        const {user: {username, password}, errors, loginError} = this.state;
        if (this.props.auth.isAuthenticated) {
            return <Redirect to={ from }/>
        }
        return (
            <div className="login">
                <div className="login__mask">
                    <div className="login_card">
                        <div className="login_card__title">
                            <div className="title">
                                <h3>Farmer's Market Place</h3>
                                <p>You must be authenticated in order to access the system. Log in below.</p>
                            </div>
                        </div>

                        <div className="login_card__content">
                            <LoginForm
                                errors={errors}
                                username={username}
                                password={password}
                                loginError={loginError}
                                onChange={this.handleChange}
                                onSave={this.handleSave}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }

    function

    mapStateToProps({auth: {authError}, auth}) {
        return {
            auth,
            authError
        };
    }

    const
    mapDispatchToProps = (dispatch) => {
        return {
            loginUser: bindActionCreators(loginUser, dispatch)
        }
    };

    export
    default

    connect(
        mapStateToProps,
        mapDispatchToProps
    )

(
    LoginUser
)
    ;
