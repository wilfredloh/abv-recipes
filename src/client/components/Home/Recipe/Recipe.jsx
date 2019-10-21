import React from 'react';


class Recipe extends React.Component {

    render() {

        let ingredients = this.props.ingredients ?  this.props.ingredients.map((ingredient, i)=>{
            return <li key={i}>{ingredient.name}</li>
        }) : <p>No ingredients!</p>;

        let instructions = this.props.instructions ? this.props.instructions.map((instruction, i)=>{
            return <p key={i}>{i+1}. {instruction.description}</p>
        }) : <p>No instructions!</p>;
        
        let recipe = this.props.recipe ? 
            <div>
                <h2>{this.props.recipe.name}</h2>
                <img src={this.props.recipe.img}/>
                <div>
                    <h3>Ingredients</h3>
                    {ingredients}
                </div>
                <div>
                    <h3>Instructions</h3>
                    {instructions}
                </div>
            </div>
        : <h1>No recipe selected! Click a recipe to see more.</h1>;

        return (
            <div>
                {recipe}
            </div>
        );
    }
}

export default Recipe;