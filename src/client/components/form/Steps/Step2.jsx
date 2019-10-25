import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../style.scss';

import Search from '../Search/Search';

class StepTwo extends React.Component {
    
    constructor() {
        super();
        this.state = {
            reminder : '',
            requiredInput : false,
            searchWord : null,
        }
        this.setWord = this.setWord.bind(this);
    }

    setWord(event) {
        let input = event.target.value;
        this.setState({searchWord : input});
    }

    render() {

        const { changeStep, ingredients, toggleCheck } = this.props;
        let { reminder, requiredInput, searchWord } = this.state;

        return (
            <div>
                <div className={styles.topContainer}>
                    <h1>Choose Ingredients</h1>
                    <button 
                        className={`btn btn-secondary`}
                        onClick={ ()=> {
                            changeStep(false)
                        }}>
                        Back
                    </button>
                </div>
                <input
                    className="form-control"
                    placeholder="search ingredient" onChange={this.setWord}></input>
                <br/>
                <Search
                    ingredients = {ingredients}
                    searchWord = {searchWord}
                    toggleCheck = {toggleCheck}
                />
                <p className={styles.reminder}>{reminder}</p>

                <div className={styles.buttonContainerSingle}>
                    <button 
                        className={`btn btn-success`}
                        onClick={ ()=> {
                            ingredients.forEach((ing)=>{
                                if (ing.checked){
                                    requiredInput = true
                                    return
                                }
                            })
                            if (requiredInput) {
                                changeStep(true)
                            } else {
                                this.setState({reminder: 'Please select at least 1 ingredient!'});
                            }
                            requiredInput = false
                        }}>
                        Fill in instructions
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(StepTwo);


