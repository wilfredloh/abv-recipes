import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../style.scss';


class StepThree extends React.Component {

    constructor() {
        super()
        this.state = {
            reminder: ''
        }
    }
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
                    className="btn btn-outline-danger m-2"
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
                    <div className={styles.newInput}>
                        <p>Step {i+1}</p>
                        {deleteButton}
                    </div>
                    <textarea 
                        placeholder={`Prepare 500ml of water...`}
                        className="form-control"
                        id={i}
                        value={currentValue}
                        onChange={(event)=>{
                            let el = event.target;
                            saveArrayInput(el.id, el.value, type);
                        }}
                    />
                    
                </div>
            )
        })

        return (
            <div>
                <div className={styles.topContainer}>
                    <h1>Recipe Steps</h1>
                    <button 
                        className={`btn btn-secondary`}
                        onClick={ ()=> {
                            changeStep(false)
                        }}>
                        Back
                    </button>
                </div>
                <p className={styles.reminder}>{this.state.reminder}</p>
                
                {instructionsArr}
                <div className={styles.buttonContainer}>
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
                            if (recipe.instructions[0]) {
                                createRecipe()
                            } else {
                                this.setState({reminder: 'Please fill in at least 1 instruction!'});
                            }
                        }}>
                        Create Recipe!
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(StepThree);
