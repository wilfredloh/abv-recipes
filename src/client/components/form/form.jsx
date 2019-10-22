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
        images: [null],
        ingredients: [null],
        instructions: [null]
      }
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.saveSingleInput = this.saveSingleInput.bind(this);
    this.saveArrayInput = this.saveArrayInput.bind(this);
    this.addInputBar = this.addInputBar.bind(this);
    this.deleteInputBar = this.deleteInputBar.bind(this);
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

  saveSingleInput (input, type) {
    this.state.newRecipe[type] = input;
    this.setState({ newRecipe : this.state.newRecipe });
  }

  saveArrayInput (index, inputValue, type) {
    console.log('testtttt in input')
    this.state.newRecipe[type][index] = inputValue;
    this.setState({ newRecipe : this.state.newRecipe });
  } 

  addInputBar (type) {
    this.state.newRecipe[type] = [...this.state.newRecipe[type], null];
    this.setState(
      {newRecipe: this.state.newRecipe}
    )
  }

  deleteInputBar (index, type) {
    this.state.newRecipe[type].splice(index, 1);
    this.setState({ newRecipe : this.state.newRecipe });
  }

  createRecipe () {
    console.log('New Recipe: ', this.state.newRecipe);
    // this.clickHandler();
  }

  render() {
    let currentStep = this.state.currentStep;
    let stepContainer;

    switch(currentStep) {
      case 1:
        stepContainer = 
        <StepOne 
          addInputBar={this.addInputBar}
          backToHome={this.clickHandler}
          changeStep={this.handleStep}
          deleteInputBar={this.deleteInputBar}
          recipe={this.state.newRecipe}
          saveArrayInput={this.saveArrayInput}
          saveSingleInput={this.saveSingleInput}
        />
        break;
        
      case 2:
        stepContainer = 
        <StepTwo 
          changeStep={this.handleStep}
        />
        break;

      case 3:
        stepContainer = 
        <StepThree 
          addInputBar={this.addInputBar}
          changeStep={this.handleStep}
          createRecipe={this.createRecipe}
          deleteInputBar={this.deleteInputBar}
          recipe={this.state.newRecipe}
          saveArrayInput={this.saveArrayInput}
        />
        break;
    }
 
    return (
      <div>
        {stepContainer}
      </div>
    );
  }
}

export default withRouter(Form);
