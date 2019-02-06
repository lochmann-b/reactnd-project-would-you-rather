import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleOptionChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { optionOneText, optionTwoText} = this.state
        dispatch(handleAddQuestion(optionOneText, optionTwoText))
        this.props.history.push('/')

    }

    render() {
        const { optionOne, optionTwo} = this.state
        return (
            <div>
                <h3>Add a question</h3>
                <form onSubmit={this.handleSubmit}>
                    Would you rather
                    <input name='optionOneText' value={optionOne} onChange={this.handleOptionChanged} type="text" />
                    Or
                    <input name='optionTwoText' value={optionTwo} onChange={this.handleOptionChanged} type="text" />
                    <br />
                    <button className="btn" type="submit" disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(AddQuestion);