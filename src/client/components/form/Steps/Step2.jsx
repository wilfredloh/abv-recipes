import React from 'react';
import { withRouter } from 'react-router-dom';


class StepTwo extends React.Component {
    constructor() {
        super();
        this.state = {
          banana: 'sneakers',
        };
        this.clickHandler = this.clickHandler.bind(this);
    
    }
    
    clickHandler(){
        setTimeout(()=>{
          this.props.history.push('/');
        },100);
    }
    render() {
        return (
            <div>
                <h1>Step 2: Choose Ingredients</h1>
                <input value="search for ing"></input>
                <br/>
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 1
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 2
                <input type="checkbox" name="vehicle1" value="Bike"></input>Ing 3

                <button onClick={ ()=> {
                    console.log('in click');
                    this.props.changeStep('inc')}}>Fill in instructions
                </button>
                <button onClick={ ()=> {
                    console.log('in click');
                    this.props.changeStep('dec')}}>Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepTwo);
