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
        const { records } = this.props;
        return (
            <Fragment>
                <ViewRecordsTable
                    auth={this.state.auth}
                    records={records} />
            </Fragment>
        )
    }
}
const mapStateToProps = ({ records: { records } }) => {
    return {
        records
    }
}
export default connect(mapStateToProps)(View);