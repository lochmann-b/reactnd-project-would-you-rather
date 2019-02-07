import { connect } from 'react-redux'
import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

/*
 * Provides the login form
 */

class LoginForm extends Component {

    state = {
        selectedUser: ''
    }

    handleUserChanged = e => {
        this.setState({
            selectedUser: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { from } = this.props

        this.props.dispatch(setAuthedUser(this.state.selectedUser))
        this.props.history.push(from)
    }

    render() {
        const { users } = this.props

        return (
            <div className='login'>
                <h3 className='center'>We'd like to know who you are</h3>
                <form className='center' onSubmit={this.handleSubmit}>
                    <label>
                        {`Today, i'd like to be: `}
                        <select value={this.state.selectedUser} onChange={this.handleUserChanged}>
                            <option key='' value=''>Select User</option>
                            {Object.keys(users).map(userId => (<option key={userId} value={userId}>{users[userId].name}</option>))}
                        </select>
                    </label>
                    <p>
                        <button className='btn' type='submit' disabled={this.state.selectedUser === ''}>Login</button>
                    </p>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(LoginForm));