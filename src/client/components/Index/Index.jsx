import React from 'react';
// import styles from './style.scss';

import Recipes from './Recipes/Recipes';
import { withRouter } from 'react-router-dom';

// import SingleRecipe from './SingleRecipe/SingleRecipe';


class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'wowowowowow',
    };
    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(){
    setTimeout(()=>{
      this.props.history.push('/new');
    },100);
}

  render() {

    let arr = this.props.arr.map((el)=> <p>{el}</p>)
    return (
        <div>
            <h1>Index Page</h1>
            <input value="search"></input>
            <button onClick={this.clickHandler}>Create New Recipe</button>
            {arr}
            <Recipes />
            {/* <SingleRecipe /> */}
            Hello
        </div>
    );
  }
}

// export default Index;
export default withRouter(Index);
