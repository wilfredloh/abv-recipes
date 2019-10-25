import React from 'react';
import styles from '../style.scss'


class Recipe extends React.Component {

    constructor() {
        super();
        this.state = {
            groupable: false,
            editButton: {
                name: false,
                about: false,
            },
            confirmEditButton: {
                name: false,
                about: false,
            },
            recipe: {
                name: null,
                about: null,
            }
        }
        this.toggleInput = this.toggleInput.bind(this);
    }

    toggleInput(){
        let grouped = this.state.groupable;
        grouped = !grouped;
        this.setState({groupable : grouped});
    }

    updateRecipeInputState(inputValue, id, type) {
        this.state.recipe[type] = inputValue
        this.setState({ recipe : this.state.recipe });
    }

    render() {
        const {
            ingredients,
            instructions,
            recipe,
            selectedImages,
            updateRecipeInput,
        } = this.props;

        let container = '';
        let dryIngredients = '';
        let wetIngredients = '';
        let images = selectedImages ? selectedImages.map((images, i)=>{
            return <img key={i} src={images.url}/>
        }) : <p>No images</p>;
        
        if (this.state.groupable) {
            dryIngredients = ingredients ?  ingredients.map((ingredient, i)=>{
                if (ingredient.type === 'dry') {
                    return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name} </li>
                }
            }) : <p>No dry ingredients</p>;

            wetIngredients = ingredients ?  ingredients.map((ingredient, i)=>{
                if (ingredient.type === 'wet') {
                    return <li key={i}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</li>
                }
            }) : <p>No wet ingredients</p>;

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
            }) : <p>No ingredients</p>;
        }

        let instructionsCont = instructions ? instructions.map((instruction, i)=>{
            return <p key={i}>{i+1}. {instruction.description}</p>
        }) : <p>No instructions</p>;
        
        

        let editRecipeNameButton = this.state.editButton.name ? '' :
            <button
                className="btn btn-outline-secondary"
                onClick={()=>{
                    this.state.editButton.name = true;
                    this.state.confirmEditButton.name = true;
                    this.setState({
                        editButton : this.state.editButton,
                        confirmEditButton : this.state.confirmEditButton
                    });
                }}
                >Edit
            </button>

        let recipeNameInput = '';
        if (recipe) {
            recipeNameInput = this.state.confirmEditButton.name ? 
            <React.Fragment>
                <input 
                    className="form-control"
                    defaultValue={recipe.name}
                    onChange={(event)=>{
                        this.updateRecipeInputState(event.target.value, recipe.id, 'name');

                    }}
                />
                <button
                    className="btn btn-outline-success"
                    onClick={()=>{
                        this.state.editButton.name = false;
                        this.state.confirmEditButton.name = false;
                        this.setState({
                            editButton : this.state.editButton,
                            confirmEditButton : this.state.confirmEditButton
                        });
                        updateRecipeInput(this.state.recipe.name, recipe.id, 'name');
                    }}
                >Update
                </button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={()=>{
                        this.state.editButton.name = false;
                        this.state.confirmEditButton.name = false;
                        this.setState({
                            editButton : this.state.editButton,
                            confirmEditButton : this.state.confirmEditButton
                        });
                    }}
                >Cancel
                </button>
            </React.Fragment>            
            : <h2>{recipe.name}</h2>
        }
        
        
        let recipeCont = recipe ? 
            <div>
                <div className={styles.recipeName}>
                    {recipeNameInput}
                    {editRecipeNameButton}
                </div>
                <p>{recipe.about}</p>
                {images}
                <div>
                    <div className={styles.ingredientsGroup}>
                        <h3>Ingredients</h3>
                        <div>
                            <input type="checkbox" name="name" value='test' onClick={this.toggleInput}></input> <span>Groupable</span>
                        </div>
                    </div>
                    <div>
                        {container}
                    </div>
                </div>
                <div>
                    <h3>Instructions</h3>
                    {instructionsCont}
                </div>
            </div>
        : 
        <div className={styles.recipeEmpty}>
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