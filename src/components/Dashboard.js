import React, { Component } from 'react';
import Questions from './Questions'

class Dashboard extends Component {

    state = {
        unanswered: true
    }

    handleShowAnswered = (e) => {
        this.setState({
            unanswered: e.target.value === 'unanswered' ? true : false
        })
    }

    render() {
        return (

            <div className="questions">

                <button className='filter-button' value='unanswered' onClick={this.handleShowAnswered} disabled={this.state.unanswered}>Unanswered</button>
                <button className='filter-button' value='answered' onClick={this.handleShowAnswered} disabled={!this.state.unanswered}>Answered</button>

                <Questions unanswered={this.state.unanswered} />
            </div>
        );
    }
}

export default Dashboard;