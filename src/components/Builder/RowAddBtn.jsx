import React from 'react';
import PropTypes from 'prop-types';

const RowAddBtn = (props) => {
    return (
        <div className="j-unit">
            <a  href="#"
                className="j-link"
                onClick={props.addRowHandler}>Add New Row</a>
        </div>
    );
};

RowAddBtn.propTypes = {
    // From Builder Component
    addRowHandler: PropTypes.func.isRequired
};

export default RowAddBtn;
