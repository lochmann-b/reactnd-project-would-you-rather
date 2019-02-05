import React, { Component } from 'react';
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared';
import LoginForm from './LoginForm';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { loading } = this.props;
        
        if (loading === true) {
            return (<div>loading...</div>)
        }

        return (            
            <div className="App">
                {this.props.authedUserId == null
                ? <LoginForm />
                : <div>The app</div>}
            </div>
        );
    }
}

function mapStateToProps({ loading }) {
    return {
        loading,
    }

}

export default connect(mapStateToProps)(App);
