/**
 * Created by Raphael Karanja <raphaelndauwa@gmail.com> on 8/29/2020 at 12:50 PM
 **/
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import {registerUser} from "../../Redux/actions/auth";
import RegisterForm from './partials/RegisterForm';

class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                cpassword: '',
                bio: '',
                id_no: '',

            },
            errors: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                cpassword: '',
                bio: '',
                id_no: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {registrationErrors} = this.props;
        if (prevProps.registrationErrors !== registrationErrors) {
            if (registrationErrors.username || registrationErrors.email || registrationErrors.password || registrationErrors.first_name || registrationErrors.last_name) {
                this.setState({
                    errors: registrationErrors
                })
            }
        }
    }

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }

    userIsValid() {
        let {user, errors} = this.state;
        let isValid = true;

        if (user.username.length < 3) {
            errors.username = 'Username is too short.';
            isValid = false;
        } else {
            errors.username = ''
        }
        if (user.password.length < 6) {
            errors.password = 'Password is too short. Password should be atleast 6 characters long';
            isValid = false;
        } else {
            errors.password = ''
        }

        if (user.cpassword !== user.password) {
            errors.cpassword = 'Passwords do not match.';
            isValid = false;
        } else {
            errors.cpassword = ''
        }
        if (!this.emailIsValid(user.email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        if (user.first_name < 3) {
            errors.first_name = 'First Name is too short.';
        } else {
            errors.first_name = '';
        }

        if (user.last_name < 3) {
            errors.last_name = 'Last Name is too short.';
        } else {
            errors.last_name = '';
        }

        this.setState({errors});

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.userIsValid()) {
            return;
        }
        this.props.registerUser(this.state.user);
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


    render() {
        let {user, errors} = this.state;
        let {auth} = this.props;
        if (auth.isAuthenticated) {
            return <Redirect to="/"/>
        }

        return (
            <div className="login">
                <div className="container">
                    <div className="login_card">
                        <div className="login_card__title">
                            <div className="title">
                                <h3>Farmer's Market Place</h3>
                                <p>Register an Account to gain access.</p>
                            </div>
                        </div>

                        <div className="login_card__content">
                            <RegisterForm
                                user={user}
                                errors={errors}
                                onChange={this.handleChange}
                                onSave={this.onSave}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({auth: {registrationErrors}, auth}) => {
    return {
        auth,
        registrationErrors
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(registerUser, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)
