import React from 'react'
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import LoaderSpinner from '../components/common/loaders/FullPage';

const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route {...rest}
           render={props => {
               if (auth.isLoading) {
                   return <LoaderSpinner/>
               } else if (!auth.isAuthenticated && !auth.isLoading) {
                   return <Redirect to={{
                       pathname: '/login',
                       state: {from: props.location}
                   }}/>
               } else {
                   return <Component {...props} />
               }

           }}/>
);


const mapStateToProps = ({auth}) => ({
    auth
});

export default connect(mapStateToProps)(PrivateRoute);