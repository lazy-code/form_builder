import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RowFieldBody extends Component {

    static propTypes = {
        fieldType: PropTypes.string.isRequired,
        fieldBodyHandler: PropTypes.func.isRequired
    };

    state = {
        fieldValue: ''
    };

    handleChange = (e) => this.setState({ fieldValue: e.target.value });

    handleBlur = () => this.props.fieldBodyHandler(this.state.fieldValue);

    componentWillReceiveProps(nextProps){
        if (this.props.fieldType !== nextProps.fieldType) {
            this.setState({fieldValue: ''});
        }
    }

    render() {

        let fieldValue;
        const { fieldType } = this.props;

        switch(fieldType){
            case 'input':
                fieldValue = <div className="j-unit">
                                <label className="j-label">Enter value for placeholder</label>
                                <input
                                    type="text"
                                    value={this.state.fieldValue}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur} />
                            </div>;
                break;
            case 'label':
                fieldValue = <div className="j-unit">
                                <label className="j-label">Enter text for label</label>
                                <input
                                    type="text"
                                    value={this.state.fieldValue}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur} />
                            </div>;
                break;
            case 'checkbox':
                fieldValue = <div className="j-unit">
                                <label className="j-label">Enter text for checkbox</label>
                                <input
                                    type="text"
                                    value={this.state.fieldValue}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur} />
                            </div>;
                break;
            default:
                fieldValue = null;
        }

        return (
            <div>
                {fieldValue}
            </div>
        );
    }
}

export default RowFieldBody;
