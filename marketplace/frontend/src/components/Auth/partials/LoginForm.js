import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TextInput from "../../common/form/Input";
import {NavLink} from "react-router-dom";

const hasLoginErrors = (errors) => (
    <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Login failed! </strong> {errors.join()}
    </div>
);

const LoginForm = ({username, password, errors, onSave, onChange, loginError}) => {
    return (
        <Fragment>
            {
                loginError.length > 0 ? hasLoginErrors(loginError) : ''
            }

            <form onSubmit={onSave}>

                <TextInput
                    type='text'
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange}/>

                <TextInput
                    type='password'
                    name='password'
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={onChange}/>


                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                    <div className="col">
                        <NavLink to="/register" className="btn btn-secondary">Create Account</NavLink>
                    </div>
                </div>

            </form>
        </Fragment>
    );
};

LoginForm.propTypes = {};

export default LoginForm;
