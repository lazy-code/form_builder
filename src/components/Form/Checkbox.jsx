import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    return (
        <div className=" j-unit">
            <label className="j-checkbox">
                <input type="checkbox" />
                <i></i>
                {props.value}
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    value: PropTypes.string.isRequired
};

export default Checkbox;
