import React from 'react';
import { withRouter } from 'react-router-dom';


class StepOne extends React.Component {
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
                <h1>Step 1: Basic details</h1>

                <p>Title</p>
                <input />
                <p>Image</p>
                <input />
                <button onClick={ ()=> {
                    console.log('in click');
                    this.props.changeStep('inc')}}>Choose Ingredients</button>
                <button onClick={this.clickHandler}>Back</button>
            </div>
        );
    }
}

export default withRouter(StepOne);
