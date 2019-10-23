import React from 'react';


class Recipe extends React.Component {

    constructor() {
        super();
        this.state = {
            groupable : false,
        }
        this.toggleInput = this.toggleInput.bind(this);
    }

    toggleInput(){
        let grouped = this.state.groupable;
        if (grouped) {
            grouped = false;
        } else {
            grouped = true;
        }
        this.setState({groupable : grouped});
    }

    render() {

        let container = '';
        let dryIngredients = '';
        let wetIngredients = '';
        let images = this.props.selectedImages ? this.props.selectedImages.map((images, i)=>{
            return <img key={i} src={images.url}/>
        }) : <p>No images!</p>;
        
        if (this.state.groupable) {
            dryIngredients = this.props.ingredients ?  this.props.ingredients.map((ingredient, i)=>{
                if (ingredient.type === 'dry') {
                    return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name} </li>
                }
            }) : <p>No dry ingredients!</p>;

            wetIngredients = this.props.ingredients ?  this.props.ingredients.map((ingredient, i)=>{
                if (ingredient.type === 'wet') {
                    return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
                }
            }) : <p>No wet ingredients!</p>;

            container = 
            <div>
                <h4>Dry</h4>
                {dryIngredients}
                <h4>Wet</h4>
                {wetIngredients}
            </div>
        } else {
            container = this.props.ingredients ?  this.props.ingredients.map((ingredient, i)=>{
                return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
            }) : <p>No ingredients!</p>;
        }

        let instructions = this.props.instructions ? this.props.instructions.map((instruction, i)=>{
            return <p key={i}>{i+1}. {instruction.description}</p>
        }) : <p>No instructions!</p>;
        
        
        let recipe = this.props.recipe ? 
            <div>
                <h2>{this.props.recipe.name}</h2>
                <p>{this.props.recipe.about}</p>
                {images}
                <div>
                    <h3>Ingredients</h3>
                    <input type="checkbox" name="name" value='test' onClick={this.toggleInput}></input> <span>Groupable</span>
                    {container}
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