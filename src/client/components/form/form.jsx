import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './style.scss';

import StepOne from './Steps/Step1';
import StepTwo from './Steps/Step2';
import StepThree from './Steps/Step3';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      newRecipe: {
        about: null,
        name: null,
        images: [null],
        ingredients: null,
        instructions: [null],
      }
    }
    this.addInputBar = this.addInputBar.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.deleteInputBar = this.deleteInputBar.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.redirectRoute = this.redirectRoute.bind(this);
    this.saveSingleInput = this.saveSingleInput.bind(this);
    this.saveArrayInput = this.saveArrayInput.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  componentDidMount() {
    // get all ingredients for user to choose
    fetch(`/api/ingredients/`)
        .then(res => res.json())
        .then(json => {
            let mappedIng = json.map((ing)=>{
                ing.checked = false;
                return ing;
            })
            this.state.newRecipe.ingredients = mappedIng;
            this.setState({ newRecipe : this.state.newRecipe })
        });
  }

  addInputBar (type) {
    this.state.newRecipe[type] = [...this.state.newRecipe[type], null];
    this.setState(
      {newRecipe: this.state.newRecipe}
    )
  }

  createRecipe () {
    let ingredients = this.state.newRecipe.ingredients.filter((ing)=> ing.checked);
    this.state.newRecipe.ingredients = ingredients;

    let data = this.state.newRecipe;
    let url = `/recipes`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      this.redirectRoute();
    })
    .catch(error => console.error('Error: ', error))
  }

  deleteInputBar (index, type) {
    this.state.newRecipe[type].splice(index, 1);
    this.setState({ newRecipe : this.state.newRecipe });
  }

  handleStep (action) {
    let currentStep = this.state.currentStep;
    action ? currentStep +=1 : currentStep -=1;
    this.setState({currentStep: currentStep})
  }

  redirectRoute() {
    setTimeout(()=>{
      this.props.history.push('/');
    }, 500);
  }

  saveArrayInput (index, inputValue, type) {
    this.state.newRecipe[type][index] = inputValue;
    this.setState({ newRecipe : this.state.newRecipe });
  } 

  saveSingleInput (input, type) {
    console.log('testt')
    this.state.newRecipe[type] = input;
    this.setState({ newRecipe : this.state.newRecipe });
  }

  toggleCheck (id) {
    this.state.newRecipe.ingredients.forEach((ing)=>{
        if (ing.id === parseInt(id)) {
            ing.checked = !ing.checked;
        }
    })
    this.setState({newRecipe : this.state.newRecipe});
  }

  render() {
    let currentStep = this.state.currentStep;
    let stepContainer;

    switch(currentStep) {
      case 1:
        stepContainer = 
        <StepOne 
          addInputBar={this.addInputBar}
          backToHome={this.redirectRoute}
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
          ingredients={this.state.newRecipe.ingredients}
          toggleCheck={this.toggleCheck}          
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
      <div className={styles.stepContainer}>
        {stepContainer}
      </div>
    );
  }
}

export default withRouter(Form);
