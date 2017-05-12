import React from 'react';
import PropTypes from 'prop-types';

const RowRemoveBtn = (props) => {
    return (
        <label
            className="j-modal-close"
            onClick={props.rowRemoveHandler}>
            <i></i>
        </label>
    );
};

RowRemoveBtn.propTypes = {
    //From Row Component
    rowRemoveHandler: PropTypes.func.isRequired
};

export default RowRemoveBtn;
