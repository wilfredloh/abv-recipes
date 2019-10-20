import React from 'react';
import { withRouter } from 'react-router-dom';


class StepThree extends React.Component {
    constructor() {
        super();
        this.state = {
          instructionSteps: 1,
        }
      }
    
      clickHandler(){
        console.log('increase step count!')
        this.state.instructionSteps += 1;
        console.log(this.state);
      }

    render() {
        return (
            <div>
                <h1>#3: Write Instructions</h1>

                <p>Step 1</p>
                <textarea></textarea>
                <button onClick={ ()=> {
                        this.clickHandler();
                    }}>
                    Add step
                </button>

                <button onClick={ ()=> {
                        this.props.createRecipe()
                    }}>
                    Create New Recipe!
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

export default withRouter(StepThree);
