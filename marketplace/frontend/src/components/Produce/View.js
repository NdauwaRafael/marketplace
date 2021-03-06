import React, { Component, Fragment } from 'react'
import ViewRecordsTable from './partials/RecordTable';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {addProduce, loadProduces} from "../../Redux/actions/products";
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {}
        }
    }

    componentDidMount() {
        this.props.loadProduce()
    }

    render() {
        const { produces } = this.props;
        return (
            <Fragment>
                <ViewRecordsTable
                    auth={this.state.auth}
                    records={produces} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ produces: { produces } }) => {
    return {
        produces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProduce: bindActionCreators(loadProduces, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
