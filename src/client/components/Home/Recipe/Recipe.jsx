import React from 'react';

// import styles from './style.scss';

class Recipe extends React.Component {
    constructor() {
        super();
        this.state = {
        monkey: 'wowowowowow',
        };
    }

    render() {
        // let recipe = this.props.recipe
        console.log('recipe: ', this.props.recipe)
        let recipe = this.props.recipe ? 
                <div>
                    <p>{this.props.recipe.name}</p>
                    <img src={this.props.recipe.img}/>
                </div>
        : "test";
        return (
            <div>
                {recipe}
                <p>Ingredients blalbalfall baflsld blalfasd blav fad as  sdad asd asd asda sdas d </p>
                <p>Instructions</p>
            </div>
        );
    }
}

export default Recipe;
