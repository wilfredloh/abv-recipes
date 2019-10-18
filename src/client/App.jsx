import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Recipe from './components/recipe/recipe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        {/* <Form /> */}
        <Recipe />
        {/* Welcome. */}
        {/* <Counter message={this.state.message} /> */}
      </div>
    );
  }
}

export default hot(module)(App);
