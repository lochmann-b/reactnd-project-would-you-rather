import React, { Component } from 'react';
import Answer from './Answer';
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'



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

    render() {
        const { question, author, authedUser } = this.props

        if (!question) {
            return (<div>This question doesn't exist</div>)
        }

        const { optionOne, optionTwo } = question
        const { avatar, name } = author
        const didVoteForOptionOne = question.optionOne.votes.includes(authedUser);
        const didVoteForOptionTwo = question.optionTwo.votes.includes(authedUser)

        if (didVoteForOptionOne || didVoteForOptionTwo) {
            const votesOptionOne = question.optionOne.votes.length
            const votesOptionTwo = question.optionTwo.votes.length
            const totalVotes = votesOptionOne + votesOptionTwo
            return (<div>
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
            </div>)

        }


        const { selectedOptoin } = this.state

        return (
            <div>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />

                <div className='question'>
                    <h3>Would you rather</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-question">
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
                        </div>
                        <div className="form-group">
                            <button className="form-question-submit" type="submit" disabled={selectedOptoin === null}>
                                Answer
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        );
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