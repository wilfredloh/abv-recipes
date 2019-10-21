import React from 'react';
import { withRouter } from 'react-router-dom';

import StepOne from './Steps/Step1';
import StepTwo from './Steps/Step2';
import StepThree from './Steps/Step3';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      newRecipe: {
        name: null,
        img: [null],
        ingredients: [null],
        instructions: [null]
      }
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/');
    }, 100);
  }

  handleStep (action) {
    let currentStep = this.state.currentStep;
    if (action) {
      currentStep += 1;
    } else {
      currentStep -= 1;
    }
    this.setState({currentStep: currentStep})
  }

  saveInput (input, type) {
    console.log('before save: ', this.state.newRecipe)
    console.log('saved input for step: ', this.state.currentStep);
    console.log(input)
    this.state.newRecipe[type] = input;
    this.setState({ newRecipe : this.state.newRecipe });
    console.log('after save: ', this.state.newRecipe)
  }

  createRecipe () {
    console.log('in create recipe!');
    this.clickHandler();
  }

  render() {
    let currentStep = this.state.currentStep;
    let stepContainer;
    if ( currentStep === 1 ) {
      stepContainer = <StepOne 
        changeStep={this.handleStep}
        backToHome={this.clickHandler}
        saveInput={this.saveInput}
      />
    } else if ( currentStep === 2) {
      stepContainer = <StepTwo changeStep={this.handleStep}/>
    } else if (currentStep === 3) {
      stepContainer = <StepThree 
        changeStep={this.handleStep}
        createRecipe={this.createRecipe}
      />
    }
    return (
      <div>
        {stepContainer}
      </div>
    );
  }
}

export default withRouter(Form);
