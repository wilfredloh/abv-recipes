import React from 'react';
import { withRouter } from 'react-router-dom';


class StepThree extends React.Component {
    constructor() {
        super();
        this.state = {
          instructions: [null],
        }
      }
    
      clickHandler(){
        console.log('increase step count!')
        this.state.instructionSteps += 1;
        console.log(this.state.instructions);

        this.setState({instructions: [...this.state.instructions, null]})
        console.log(this.state.instructions);
        this.nameInput.focus();
      }

    render() {

        let instructionsArr = this.state.instructions.map((img,i)=>{
            let ref = (input) => { this.nameInput = input }
            return(
                <input 
                    key={i}
                    ref={ref} 
                    onKeyUp={(event)=>{
                        // this.props.saveInput(event.target.value, 'img');
                        var key = event.which || event.keyCode;
                        if (key === 13) { // 13 is enter
                            if (event.target.value) {
                                console.log(event.which) 
                                this.clickHandler(); 
                            }
                        }
                    }}
                />
            )
        })

        return (
            <div>
                <h1>#3: Write Instructions</h1>

                <p>Step 1</p>
                {instructionsArr}
                <p>Press enter to create new image</p>

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
                        this.props.changeStep(false)
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepThree);
