import React from 'react';
import styles from './style.scss';
import { withRouter } from 'react-router-dom';
import StepOne from './Steps/Step1';
import StepTwo from './Steps/Step2';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.handleStep = this.handleStep.bind(this);

  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/');
    },100);
  }

  handleStep (step) {
    console.log('in step!')
    console.log(this.state)
    let x = this.state.step;
    if (step === 'inc') {
      x += 1;
    } else {
      x -= 1;
    }
    console.log(this.state)
    this.setState({step: x})

  }

  render() {
    let step = this.state.step;
    let stepContainer;
    if ( step === 1 ) {
      stepContainer = <StepOne changeStep={this.handleStep}/>
    } else if ( step === 2) {
      stepContainer = <StepTwo changeStep={this.handleStep}/>
    }
    return (
      <div>
        {stepContainer}
      </div>
    );
  }
}

// export default Form;
export default withRouter(Form);
