import React from 'react';
import { FaMedal } from 'react-icons/fa'


export default function User(props) {
    const { name, avatarURL, questions, answers, ranking } = props.userInfo
    return (
        <div className='user'>
            <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='user-info'>
                <h3>{`${name}'s Score`}</h3>
                <p>{`Questions: ${questions}`}</p>
                <p>{`Answers: ${answers}`}</p>
                <p>
                    {`Score: ${questions + answers}`}
                    {ranking <= 3 && <FaMedal className={`rank_${ranking}`}/>}
                </p>
            </div>
        </div>
    );
}