import React from 'react';

import styles from '../style.scss';


class Recipes extends React.Component {

  render() {
    // console.log('recipes in recipe: ', this.props)

    let recipes = this.props.recipes ? 
      this.props.recipes.map( (recipe, index) => {
        return (
          <div key={index}>
            <h3>{recipe.name}</h3>
            <img 
              src={recipe.img}
              onClick={()=>{
                this.props.chooseRecipe(recipe.id);
              }}
            />
            {/* <button >Choose
            </button> */}
          </div>
        )
      })
      : <h1>No recipes to show!</h1>;
  
    return (
      <div className={styles.recipes}>
        {recipes}
      </div>
    );
  }
}

export default Recipes;
