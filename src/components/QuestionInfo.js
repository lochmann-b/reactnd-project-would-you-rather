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
        const { avatar, name } = author
        return (
            <div>
                <h3>{`${name} asks:`}</h3>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <h4>Would you rather</h4>
                <div className='question'>
                    {`${optionOne.text}...`}
                </div>
                <Link to={`/questions/${question.id}`} >Go to poll</Link>
            </div>
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