import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="j-wrapper j-wrapper-640 j-pro">
                <div className="j-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
