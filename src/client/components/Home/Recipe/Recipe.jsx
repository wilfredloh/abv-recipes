import React from 'react';
import styles from '../style.scss'


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

        const {
            ingredients,
            instructions,
            recipe,
            selectedImages,
        } = this.props;

        let container = '';
        let dryIngredients = '';
        let wetIngredients = '';
        let images = selectedImages ? selectedImages.map((images, i)=>{
            return <img key={i} src={images.url}/>
        }) : <p>No images!</p>;
        
        if (this.state.groupable) {
            dryIngredients = ingredients ?  ingredients.map((ingredient, i)=>{
                if (ingredient.type === 'dry') {
                    return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name} </li>
                }
            }) : <p>No dry ingredients!</p>;

            wetIngredients = ingredients ?  ingredients.map((ingredient, i)=>{
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
            container = ingredients ?  ingredients.map((ingredient, i)=>{
                return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
            }) : <p>No ingredients!</p>;
        }

        let instructionsCont = instructions ? instructions.map((instruction, i)=>{
            return <p key={i}>{i+1}. {instruction.description}</p>
        }) : <p>No instructions!</p>;
        
        
        let recipeCont = recipe ? 
            <div>
                <h2>{recipe.name}</h2>
                <p>{recipe.about}</p>
                {images}
                <div>
                    <h3>Ingredients</h3>
                    <input type="checkbox" name="name" value='test' onClick={this.toggleInput}></input> <span>Groupable</span>
                    {container}
                </div>
                <div>
                    <h3>Instructions</h3>
                    {instructionsCont}
                </div>
            </div>
        : 
        <div>
            <img src="https://media.tenor.com/images/db6a6137bb717491813f56eb7900d617/tenor.gif"/>
            <p>Click on a recipe to view more</p>
        </div>;

        return (
            <div className={`col-6 ${styles.recipe}`}>
                {recipeCont}
            </div>
        );
    }
}

export default Recipe;