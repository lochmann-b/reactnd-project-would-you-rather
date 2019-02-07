import React from 'react';

export default function User(props) {
    const { name, avatarURL, questions, answers } = props.userInfo
    return (
        <div>
            <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div>
                <h3>{`${name}'s Score`}</h3>
                <p>{`Questions: ${questions}`}</p>
                <p>{`Answers: ${answers}`}</p>
                <p>{`Score: ${questions + answers}`}</p>
            </div>
        </div>
    );
}