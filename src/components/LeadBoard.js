import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from './User'

class LeadBoard extends Component {
    render() {
        const { userInfo } = this.props
        return (
            <div>
                <ul>
                    {userInfo.map(u => (
                        <li key={u.id}>
                           <User userInfo={u}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        userInfo: Object.values(users)
            .map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    avatarURL: user.name.avatarURL,
                    answers: Object.keys(user.answers).length,
                    questions: user.questions.length
                }

            })
            .sort((a, b) => (b.answers + b.questions) - (a.answers + a.questions))
    }
}

export default connect(mapStateToProps)(LeadBoard);