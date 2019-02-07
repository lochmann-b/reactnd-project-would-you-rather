import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';

/*
* Compnent that allows the user to add a new questin
*/

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
        const { dispatch, history } = this.props
        const { optionOneText, optionTwoText } = this.state
        dispatch(handleAddQuestion(optionOneText, optionTwoText))
        history.push('/')

    }

    render() {
        const { optionOne, optionTwo } = this.state
        return (
            <div className='add-question'>
                <h3>Add a question</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Would you rather
                        <br />
                        <input placeholder='Enter option one' name='optionOneText' value={optionOne} onChange={this.handleOptionChanged} type="text" />
                    </label>
                    <br />
                    <label>                        
                        or would you rather<br />
                        <input placeholder='Enter option two' name='optionTwoText' value={optionTwo} onChange={this.handleOptionChanged} type="text" />
                    </label>
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