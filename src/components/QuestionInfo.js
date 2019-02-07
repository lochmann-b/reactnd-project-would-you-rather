import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

/*
*  Renders the author and the first option of the question.
*  Links to actual question component where the question can be answered/viewed
*/

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

function mapStateToProps({ users, questions }, { id }) {
    const question = questions[id]
    const author = question ? users[question.author] : null
    return {
        question: question,
        author: author
    }
}

QuestionInfo.propTypes = {
    id: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(QuestionInfo); 