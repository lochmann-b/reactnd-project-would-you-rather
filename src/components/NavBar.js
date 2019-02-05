import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends Component {

    handleLogout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const { user } = this.props
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            Add a new question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leadboard' activeClassName='active'>
                            Lead Board
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            {`Hi, ${user.name}`}
                            <button onClick={this.handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        user: authedUser === null ? null : users[authedUser]
    }
}

export default withRouter(connect(mapStateToProps)(NavBar));