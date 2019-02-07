/* Shows author and option a. Links to actual question component*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionInfo extends Component {

    render() {
        const { question, author } = this.props

        if (!question || !author) {
            return (<div>This question doesn't exist</div>)
        }

        const { optionOne } = question
        const { avatarURL, name } = author

        return (
            <Link className='question' to={`/questions/${question.id}`}>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='question-details'>
                    <h3>{`${name} asks:`}</h3>
                    <strong>Would you rather...</strong>
                    <p>{`...${optionOne.text}...`}</p>
                </div>
            </Link>
        );
    }
}

function mapStateToProps({ users, authedUser, questions }, { id }) {
    const question = questions[id]
    const author = question ? users[question.author] : null
    return {
        question: question,
        author: author
    }
}

export default connect(mapStateToProps)(QuestionInfo); 