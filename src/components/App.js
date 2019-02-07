import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared';
import NavBar from './NavBar'
import LoginForm from './LoginForm';
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import LeadBoard from './LeadBoard'
import Question from './Question'
import Component404 from './Component404';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { loading, authedUser, location } = this.props;
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <LoadingBar />
                        <NavBar />
                        {loading === true
                            ? null
                            : (authedUser == null
                                ? <LoginForm from={location} />
                                : <div>
                                    <Switch>
                                        <Route exact path='/' component={Dashboard} />
                                        <Route path='/add' component={AddQuestion} />
                                        <Route path='/leadBoard' component={LeadBoard} />
                                        <Route path='/questions/:id' component={Question} />
                                        <Route component={Component404} />
                                    </Switch>
                                </div>)
                        }

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ loading, authedUser }) {
    return {
        loading,
        authedUser
    }

}

export default connect(mapStateToProps)(App);
