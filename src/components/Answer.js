import React  from 'react';

const Answer = (props) => {
    const {question, votes, totalVotes, selected} = props
    return (<div>
        {`${question} ${ selected === true ? '<-- your vote': ''}`}
        <p>{`Votes: ${votes}/${totalVotes}`}</p>        
        <p>{`Votes %: ${(votes.toFixed(2)/totalVotes.toFixed(2) * 100.00).toFixed(2)}`}</p>        
    </div>) 
}

export default Answer

