import React from 'react';
import { withRouter } from 'react-router-dom';

import StepOne from './Steps/Step1';
import StepTwo from './Steps/Step2';
import StepThree from './Steps/Step3';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/');
    }, 100);
  }

  handleStep (step) {
    let currentStep = this.state.step;
    if (step === 'inc') {
      currentStep += 1;
    } else {
      currentStep -= 1;
    }
    this.setState({step: currentStep})
  }

  createRecipe () {
    console.log('in create recipe!');
    this.clickHandler();
  }

  render() {
    let step = this.state.step;
    let stepContainer;
    if ( step === 1 ) {
      stepContainer = <StepOne 
        changeStep={this.handleStep}
        backToHome={this.clickHandler}
      />
    } else if ( step === 2) {
      stepContainer = <StepTwo changeStep={this.handleStep}/>
    } else if (step === 3) {
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
