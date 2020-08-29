import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
    render() {
        const {name, id, label, error, value, onChange} = this.props;
        let validatorClass = '';
        let parentValidator = '';
        let errorMessageValidator = '';
        if (error) {
            validatorClass = 'is-invalid';
            parentValidator = 'has-danger';
            errorMessageValidator = 'invalid-feedback';
        } else {
            validatorClass = '';
            parentValidator = '';
            errorMessageValidator = 'text-muted';
        }
        return (
            <div className= {"form-group " + parentValidator}>
                <div className="custom-control custom-radio" >
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={"custom-control-input" + validatorClass}/>
                    <label
                        className="custom-control-label"
                        htmlFor={id}>
                        {label}
                    </label>
                </div>
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );
    }
};

Radio.propTypes = {};

export default Radio;
