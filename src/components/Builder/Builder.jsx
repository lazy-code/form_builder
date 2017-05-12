import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createField } from '../../actions/fields';
import { createForm } from '../../actions/form';

import Row from './Row';
import RowAddBtn from './RowAddBtn';

class Builder extends Component {

    addRowHandler = (e) => {
        e.preventDefault();
        this.props.createField();
    };

    createFormHandler = () => this.props.createForm();

    render() {

        const errors = this.props.fields.filter(field => field.error);
        const errorMessage = errors.length > 0 ?
            <div className="j-error-message j-unit">Please select type for all fields</div> :
            null;

        const rows = this.props.fields.map(field => <Row key={field.id} field={field} />);

        const submitBtn = rows.length > 0 ?
            <button
                type="button"
                className="j-primary-btn"
                onClick={this.createFormHandler}>Create Form</button> :
            null;

        return (
            <div>
                <div className="j-header">
                    <p>Builder</p>
                </div>
                <div className="j-divider j-gap-bottom-25"></div>
                <RowAddBtn addRowHandler={this.addRowHandler} />
                {errorMessage}
                {rows}
                {submitBtn}
            </div>
        );
    }
}

export default connect(state => ({
    fields: state.fields
}), { createField, createForm })(Builder);
