import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from './User'

class LeadBoard extends Component {
    render() {
        const { userInfo } = this.props
        return (
            <div className='leadboard'>
                <ul>
                    {userInfo.map(u => (
                        <li key={u.id}>
                            <User userInfo={u} />
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
            .sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
            .map((user, index) => {
                return {
                    id: user.id,
                    ranking: (index + 1),
                    name: user.name,
                    avatarURL: user.avatarURL,
                    answers: Object.keys(user.answers).length,
                    questions: user.questions.length
                }

            })
            .sort((a, b) => (b.answers + b.questions) - (a.answers + a.questions))
    }
}

export default connect(mapStateToProps)(LeadBoard);