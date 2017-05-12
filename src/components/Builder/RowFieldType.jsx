import React from 'react';
import PropTypes from 'prop-types';

const RowFieldType = (props) => {
    return (
        <div>
            <label className="j-label">Type of field</label>
            <label className="j-input j-select j-unit">
                <select
                    value={props.fieldType}
                    onChange={props.fieldTypeHandler}>
                    <option value="none">Select Type of Field</option>
                    <option value="input">Input Field</option>
                    <option value="label">Label</option>
                    <option value="checkbox">Checkbox</option>
                </select>
                <i></i>
            </label>
        </div>
    );
};

RowFieldType.propTypes = {
    // From Row Component
    fieldType: PropTypes.string.isRequired,
    fieldTypeHandler: PropTypes.func.isRequired
};

export default RowFieldType;
