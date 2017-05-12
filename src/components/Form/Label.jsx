import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    return (
        <label className="j-label">{props.value}</label>
    );
};

Label.propTypes = {
    value: PropTypes.string.isRequired
};

export default Label;
