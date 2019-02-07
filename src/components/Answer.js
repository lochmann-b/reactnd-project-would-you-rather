import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import PropTypes  from 'prop-types'

/*
* Renders an answer and related data like votes and % of votes
*/
const Answer = (props) => {
    const { question, votes = 0, totalVotes = 0, selected } = props
    const votesPercent = totalVotes > 0 ? (votes.toFixed(2) / totalVotes.toFixed(2) * 100.00).toFixed(2) : "-";
    return (

        <div className='answer'>
            <p className='answer-text'>
                {`...${question}?`}
                {selected && (<FaCheckCircle className='your-answer' />)}
            </p>
            <div className='votes'>
                <p className='vote'>{`Votes: ${votes}/${totalVotes}`}</p>
                <p className='vote'>{`Votes %: ${votesPercent}`}</p>
            </div>
        </div>)
}


Answer.propTypes = {
    question: PropTypes.string.isRequired,
    votes: PropTypes.number,
    totalVotes: PropTypes.number,
    selected: PropTypes.bool   
}



export default Answer