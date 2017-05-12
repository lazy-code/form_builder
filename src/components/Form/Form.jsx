import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearAllFields } from '../../actions/fields';
import Input from './Input';
import Checkbox from './Checkbox';
import Label from './Label';

class Form extends Component {

    componentWillUnmount(){
        this.props.clearAllFields();
    }

    render() {

        const body = this.props.fields.map(field => {
            switch(field.fieldType) {
                case 'input':
                    return <Input key={field.id} value={field.fieldValue} />;
                    break;
                case 'label':
                    return <Label key={field.id} value={field.fieldValue} />;
                    break;
                case 'checkbox':
                    return <Checkbox key={field.id} value={field.fieldValue} />;
                    break;
            }
        });

        return (
            <div className="j-wrapper j-wrapper-640">
                <form className="j-pro">
                    <div className="j-header">
                        <p>Example Form</p>
                    </div>
                    <div className="j-divider j-gap-bottom-25"></div>
                    <div className="j-content">
                        {body}
                    </div>
                    <div className="j-divider j-gap-bottom-25"></div>
                    <button type="button" className="j-primary-btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(state => ({
    fields: state.fields
}), { clearAllFields })(Form);
