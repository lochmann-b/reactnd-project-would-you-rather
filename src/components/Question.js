import React, { Component } from 'react';
import Answer from './Answer';
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'


/*
*  Renders a question.
*  If the authed user has already answered the question, some stats will be shown.
*  Otherwise, the question can be answered.
*/
class Question extends Component {

    state = {
        selectedOptoin: null
    }

    handleOptionSelected = (e) => {
        this.setState({
            selectedOptoin: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { question, dispatch } = this.props
        const { selectedOptoin } = this.state
        dispatch(handleSaveAnswer(question.id, selectedOptoin))
    }


    unansweredQuestion = () => {
        const { question, author } = this.props
        const { optionOne, optionTwo } = question
        const { avatarURL, name } = author
        const { selectedOptoin } = this.state

        return (
            <div className='question'>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />

                <div className='question-details'>
                    <h3>{`${name} asks:`}</h3>
                    <strong>Would you rather</strong>
                    <form className="form-question" onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                type="radio"
                                value="optionOne"
                                checked={selectedOptoin === 'optionOne'}
                                className="form-question-radiobutton"
                                onChange={this.handleOptionSelected}
                            />
                            {optionOne.text}
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="optionTwo"
                                checked={selectedOptoin === 'optionTwo'}
                                className="form-question-radiobutton"
                                onChange={this.handleOptionSelected}
                            />
                            {optionTwo.text}
                        </label>
                        <button className="btn" type="submit" disabled={selectedOptoin === null}>
                            Answer
                            </button>
                    </form>
                </div>
            </div>
        )
    }

    answeredQuestion = (didVoteForOptionOne, didVoteForOptionTwo) => {
        const { question, author } = this.props
        const { optionOne, optionTwo } = question
        const { avatarURL, name } = author
        const votesOptionOne = optionOne.votes.length
        const votesOptionTwo = optionTwo.votes.length
        const totalVotes = votesOptionOne + votesOptionTwo
        return (
            <div className='question'>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='question-details'>
                    <h3>{`${name} asked:`}</h3>
                    <strong>Would you rather</strong>                    
                    <Answer
                        question={optionOne.text}
                        votes={votesOptionOne}
                        totalVotes={totalVotes}
                        selected={didVoteForOptionOne}
                    />
                    <Answer
                        question={optionTwo.text}
                        votes={votesOptionTwo}
                        totalVotes={totalVotes}
                        selected={didVoteForOptionTwo}
                    />
                </div>
            </div>
        )
    }

    render() {
        const { question,  authedUser } = this.props

        if (!question) {
            return (<div>This question doesn't exist</div>)
        }
        const didVoteForOptionOne = question.optionOne.votes.includes(authedUser);
        const didVoteForOptionTwo = question.optionTwo.votes.includes(authedUser)

        if (didVoteForOptionOne || didVoteForOptionTwo) {
            return this.answeredQuestion(didVoteForOptionOne, didVoteForOptionTwo)
        }

        return this.unansweredQuestion()
    }
}



function mapStateToProps({ users, authedUser, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const author = question ? users[question.author] : null
    return {
        question: question,
        authedUser,
        author: author
    }
}

export default connect(mapStateToProps)(Question); 