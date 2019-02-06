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
                                        <Route render={() => (<div><h1>404</h1><p>This is a very basic 404 page. Better designs could be found here:<br /><a href='https://www.crazyegg.com/blog/404-page-web-design/'>How To Design a 404 Page That Keeps Visitors On Your Site.</a></p><p><Link to='/'>Go home</Link></p></div>)} />
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
