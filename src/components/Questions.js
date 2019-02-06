import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'

class Questions extends Component {
  

    render() {
        const { questionIds } = this.props

        return (
            <ul>
                {questionIds.map( questionId => (
                    <li key={questionId}>
                        <QuestionInfo id={questionId} />
                    </li>
                ))}
            </ul>
        );
    }
}


function mapStateToProps({ questions, authedUser, users }, { unanswered }) {
    const answeredQuestions = new Set(Object.keys(users[authedUser].answers))
    return {
        questionIds: Object.keys(questions)
            .filter(questionId => unanswered ? !answeredQuestions.has(questionId) : answeredQuestions.has(questionId))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Questions);
