import React from 'react';
import { withRouter } from 'react-router-dom';


class StepThree extends React.Component {

    render() {
        let type = 'instructions';

        let instructionsArr = this.props.recipe.instructions.map((ins,i)=>{
            let currentValue = ins ? ins : '';
            let deleteButton = 
                <button 
                    id={i}
                    onClick={(event)=>{
                        let el = event.target
                        this.props.deleteInputBar(el.id, type);
                    }}
                > x 
                </button>;
            if (i === 0) {
                deleteButton = '';
            }
            
            return(
                <div key={i}>
                    <p>Step {i+1}</p>
                    <textarea 
                        id={i}
                        value={currentValue}
                        onChange={(event)=>{
                            let el = event.target;
                            this.props.saveArrayInput(el.id, el.value, type);
                        }}
                    />
                    {deleteButton}
                </div>
            )
        })

        return (
            <div>
                <h1>#3: Write Instructions</h1>

                {instructionsArr}

                <button 
                    className={`btn btn-light`}
                    onClick={ ()=> {
                        this.props.addInputBar(type);
                    }}>
                    Add step
                </button>

                <button 
                    className={`btn btn-success`}
                    onClick={ ()=> {
                        this.props.createRecipe()
                    }}>
                    Create Recipe!
                </button>
                <button 
                    className={`btn btn-secondary`}
                    onClick={ ()=> {
                        this.props.changeStep(false)
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepThree);
