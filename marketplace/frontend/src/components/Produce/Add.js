import React, { Component, Fragment } from 'react';
import AddRecordForm from './partials/AddRecordForm';

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produce: {
                name: '',
                price: 0,
                quantity: '0',
                description: '',
                owner: ''
            },
            auth: {},
            errors: {
                name: '',
                price: '',
                quantity: '',
                description: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let record = Object.assign({}, this.state.record);
        record[field] = value;
        return this.setState({ record });
    };

    produceIsValid() {
        let { produce, errors } = this.state;
        let isValid = true;

        if (produce.name < 3) {
            errors.name = 'Name is too short.';
        } else {
            errors.name = '';
        }

        if (produce.price) {
            errors.price = 'Price is required';
        } else {
            errors.price = '';
        }

        if (produce.quantity > 0) {
            errors.quantity = 'Quantity cannot be 0, when adding a produce';
        } else {
            errors.quantity = '';
        }

        if (produce.description.length > 0) {
            errors.description = 'Description is too short';
        } else {
            errors.description = '';
        }

        this.setState({ errors });

        return isValid;
    };

    onSave() { }

    render() {
        const { produce, auth, errors } = this.state
        return (
            <Fragment>
                <AddRecordForm
                    onSave={this.onSave}
                    onChange={this.handleChange}
                    record={produce}
                    auth={auth}
                    errors={errors} />
            </Fragment>
        )
    }
}

export default Add
