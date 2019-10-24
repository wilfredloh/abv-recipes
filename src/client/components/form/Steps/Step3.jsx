import React from 'react';
import { withRouter } from 'react-router-dom';


class StepThree extends React.Component {

    render() {
        const {
            addInputBar,
            changeStep,
            createRecipe,
            deleteInputBar,
            recipe,
            saveArrayInput,
        } = this.props;

        let type = 'instructions';

        let instructionsArr = recipe.instructions.map((ins,i)=>{
            let currentValue = ins ? ins : '';
            let deleteButton = 
                <button 
                    id={i}
                    onClick={(event)=>{
                        let el = event.target
                        deleteInputBar(el.id, type);
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
                            saveArrayInput(el.id, el.value, type);
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
                        addInputBar(type);
                    }}>
                    Add step
                </button>

                <button 
                    className={`btn btn-success`}
                    onClick={ ()=> {
                        createRecipe()
                    }}>
                    Create Recipe!
                </button>
                <button 
                    className={`btn btn-secondary`}
                    onClick={ ()=> {
                        changeStep(false)
                    }}>
                    Back
                </button>
            </div>
        );
    }
}

export default withRouter(StepThree);
