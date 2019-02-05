import { connect } from 'react-redux'
import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser'

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
        this.props.dispatch(setAuthedUser(this.state.selectedUser))
    }

    render() {
        const { users } = this.props
        
        return (
            <div>
                <h3>Login</h3>
                <form className='login' onSubmit={this.handleSubmit}>
                    <select value={this.state.selectedUser} onChange={this.handleUserChanged}>
                        <option key='' value=''>Select User</option>
                        {Object.keys(users).map(userId => (<option key={userId} value={userId}>{users[userId].name}</option>))}
                    </select>
                    <button className='btn' type='submit' disabled={this.state.selectedUser === ''}>Login</button>
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

export default connect(mapStateToProps)(LoginForm);