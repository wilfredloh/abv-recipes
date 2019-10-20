import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {

    render() {
        return (
            <div>
                <h1>#1: Basic details</h1>

                <p>Title</p>
                <input />
                <p>Image</p>
                <input />
                <button 
                    onClick={()=> {
                        this.props.changeStep('inc');
                    }}>
                    Choose Ingredients
                </button>
                <button onClick={()=> {
                        this.props.backToHome();
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepOne);
