import React from 'react';

class Recipes extends React.Component {

  render() {
    // console.log('recipes in recipe: ', this.props)

    let recipes = this.props.recipes ? 
      this.props.recipes.map( (recipe, index) => {
        return (
          <div key={index}>
            <p>{recipe.name}</p>
            <img src={recipe.img}/>
            <button onClick={()=>{
              this.props.chooseRecipe(recipe.id);
              }}>Choose
            </button>
          </div>
        )
      })
      : <h1>No recipes to show!</h1>;
  
    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default Recipes;
