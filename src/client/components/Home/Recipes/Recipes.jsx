import React from 'react';

import styles from '../style.scss'
import Search from '../../Search/Search';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
        searchType : 'recipes'
    }
  }
  render() {
    // console.log('recipes in recipe: ', this.props)
    // let recipes = this.props.recipes ? 
    //   this.props.recipes.map( (recipe, index) => {
    //     return (
    //       <div key={index}>
    //         <h3>{recipe.name}</h3>
    //         <img 
    //           src={recipe.img}
    //           onClick={()=>{
    //             this.props.chooseRecipe(recipe.id);
    //           }}
    //         />
    //         {/* <button >Choose
    //         </button> */}
    //       </div>
    //     )
    //   })
    //   : <h1>No recipes to show!</h1>;

    return (
      <div className={`col-5 ${styles.recipes}`} >
        {/* {recipes} */}
        <Search
            array = {this.props.recipes}
            searchWord = {this.props.searchWord}
            searchType={this.state.searchType}
            chooseRecipe={this.props.chooseRecipe}
            images={this.props.images}
        />
      </div>
    );
  }
}

export default Recipes;
