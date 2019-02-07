import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Answer = (props) => {
    const { question, votes, totalVotes, selected } = props

    return (
        <div className='answer'>
            <p className='answer-text'>
                {`...${question}?`}
                {selected && (<FaCheckCircle className='your-answer' />)}
            </p>
            <div className='votes'>
                <p class='vote'>{`Votes: ${votes}/${totalVotes}`}</p>
                <p class='vote'>{`Votes %: ${(votes.toFixed(2) / totalVotes.toFixed(2) * 100.00).toFixed(2)}`}</p>
            </div>
        </div>)
}

export default Answer