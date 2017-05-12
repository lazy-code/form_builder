import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className=" j-unit">
            <div className="j-input">
                <input type="text" placeholder={props.value} />
            </div>
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired
};

export default Input;
