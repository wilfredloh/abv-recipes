import React from 'react';

class Recipe extends React.Component {

    render() {
        console.log('recipe: ', this.props.recipe)
        let recipe = this.props.recipe ? 
                <div>
                    <p>{this.props.recipe.name}</p>
                    <img src={this.props.recipe.img}/>
                    <p>Ingredients blalbalfall baflsld blalfasd blav fad as  sdad asd asd asda sdas d </p>
                    <p>Instructions</p>
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