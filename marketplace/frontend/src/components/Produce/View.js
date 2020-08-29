import React, { Component, Fragment } from 'react'
import ViewRecordsTable from './partials/RecordTable';
import { connect } from 'react-redux';
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {}
        }
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
}
export default connect(mapStateToProps)(View);
