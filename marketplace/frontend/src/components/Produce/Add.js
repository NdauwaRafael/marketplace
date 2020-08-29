import React, { Component, Fragment } from 'react';
import AddRecordForm from './partials/AddRecordForm';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addProduce} from "../../Redux/actions/products";

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produce: {
                name: '',
                price: '',
                quantity: '',
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
        let produce = Object.assign({}, this.state.produce);
        produce[field] = value;
        return this.setState({ produce });
    };

    produceIsValid() {
        let { produce, errors } = this.state;
        let isValid = true;

        if (produce.name < 3) {
            errors.name = 'Name is too short.';
        } else {
            errors.name = '';
        }

        if (!produce.price) {
            errors.price = 'Price is required';
        } else {
            errors.price = '';
        }

        if (parseInt(produce.quantity) === 0) {
            errors.quantity = 'Quantity cannot be 0, when adding a produce';
        } else {
            errors.quantity = '';
        }

        if (produce.description.length < 5) {
            errors.description = 'Description is too short';
        } else {
            errors.description = '';
        }

        this.setState({ errors });

        return isValid;
    };

    onSave(e) {
        e.preventDefault();

        if (!this.produceIsValid()) {
            return;
        }
        this.props.addProduce(this.state.produce);
    }

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

const mapStateToProps = ({auth: {addProduceErrors}, produce}) => {
    return {
        addProduceErrors,
        produce
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProduce: bindActionCreators(addProduce, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
