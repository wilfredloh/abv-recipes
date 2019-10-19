import React from 'react';
// import styles from './style.scss';

import Recipes from './Recipes/Recipes';
// import SingleRecipe from './SingleRecipe/SingleRecipe';


class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'wowowowowow',
    };
  }

  render() {
    return (
        <div>
            <h1>abillionveg</h1>
            <input value="search"></input>
            <button>Create New Recipe</button>
            <Recipes />
            {/* <SingleRecipe /> */}
            Hello
        </div>
    );
  }
}

export default Index;
