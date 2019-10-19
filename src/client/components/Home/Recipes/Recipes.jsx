import React from 'react';

import styles from './style.scss';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'wowowowowow',
    };
  }

  render() {
    // console.log('recipes in recipe: ', this.props)
    let recipes = '';
    if (this.props.data !== null) {
      // console.log('in here!!')
      recipes = this.props.data.map( (r,i) => {
          return (<div key={i}>
              <p>{r.name}</p>
              <img src={r.img}/>
              <button onClick={()=>{
                this.props.chooseRecipe(r.id)
              }}>Choose</button>
            </div>)
      })
    }
    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default Recipes;
