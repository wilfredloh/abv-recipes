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
    this.addImagesInput = this.addImagesInput.bind(this);
    this.deleteImagesInput = this.deleteImagesInput.bind(this);
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

  saveArrayInput (index, inputValue) {
    console.log('this is index: ', index);
    this.state.newRecipe.images[index] = inputValue;
    this.setState({ newRecipe : this.state.newRecipe });
    console.log('this is inputValue: ', inputValue);
  } 

  addImagesInput () {
    console.log('this stea? ', this.state.newRecipe.images)
    this.state.newRecipe.images = [...this.state.newRecipe.images, null];
    console.log('this stea2? ', this.state.newRecipe.images)

    this.setState(
      {newRecipe: this.state.newRecipe}
    )
  }

  deleteImagesInput (index) {
    console.log('test works in delete! ', index)
    console.log(this.state.newRecipe)
    this.state.newRecipe.images.splice(index, 1);
    this.setState({ newRecipe : this.state.newRecipe });

  }

  createRecipe () {
    this.clickHandler();
  }

  render() {
    let currentStep = this.state.currentStep;
    let stepContainer;
    if ( currentStep === 1 ) {
      stepContainer = <StepOne 
        recipe={this.state.newRecipe}
        changeStep={this.handleStep}
        backToHome={this.clickHandler}
        saveSingleInput={this.saveSingleInput}
        saveArrayInput={this.saveArrayInput}
        addImagesInput={this.addImagesInput}
        deleteImagesInput={this.deleteImagesInput}
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
