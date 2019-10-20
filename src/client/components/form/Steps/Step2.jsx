import React from 'react';
import { withRouter } from 'react-router-dom';


class StepTwo extends React.Component {
    
    render() {
        return (
            <div>
                <h1>#2: Choose Ingredients</h1>
                <input placeholder="search ingredient"></input>
                <br/>
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 1
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 2
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 3

                <button onClick={ ()=> {
                    this.props.changeStep('inc')
                    }}>
                    Fill in instructions
                </button>
                <button onClick={ ()=> {
                    this.props.changeStep('dec')
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepTwo);
