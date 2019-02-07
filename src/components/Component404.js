import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Component404 = (props) => {
    return (
        <div className="not-found">
            <h3>404: There is nothing here</h3>


            {props.question === true
                ? (
                    <p>{`This question doesn't exist and I have got no idea who told you they would.
                        But the good news are, you can create one by yourself. Just click this link to do so: `
                    }<Link to='/add'>Create a new Question</Link></p>

                ) : "The page you requested couldn't be found."}

        </div>
    );
};

Component404.propTypes = {
    question: PropTypes.bool
}

export default Component404;