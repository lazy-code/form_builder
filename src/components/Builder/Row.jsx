import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeField, updateFieldType, updateFieldValue } from '../../actions/fields';
import RowRemoveBtn from './RowRemoveBtn';
import RowFieldType from './RowFieldType';
import RowFieldBody from './RowFieldBody';

class Row extends Component {

    state = {
        option: ''
    };

    rowRemoveHandler = () => this.props.removeField(this.props.field.id);

    fieldTypeHandler = (e) => {
        this.setState({option: e.currentTarget.value});
        this.props.updateFieldType(this.props.field.id, e.currentTarget.value);
    };

    fieldBodyHandler = (fieldValue) => this.props.updateFieldValue(this.props.field.id, fieldValue);

    render() {

        return (
            <div>
                <div className="j-unit">
                    <RowRemoveBtn rowRemoveHandler={this.rowRemoveHandler} />
                    <RowFieldType
                        fieldType={this.state.option}
                        fieldTypeHandler={this.fieldTypeHandler} />
                    <RowFieldBody
                        fieldType={this.state.option}
                        fieldBodyHandler={this.fieldBodyHandler} />
                </div>
                <div className="j-divider j-gap-bottom-25"></div>
            </div>
        );
    }
}

export default connect(null, { removeField, updateFieldType, updateFieldValue })(Row);
