import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './style.scss';

import Recipe from './Recipe/Recipe';
import Recipes from './Recipes/Recipes';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            images: null,
            instructions: null,
            recipe: null,
            recipes: null,
            recipeIngredients: null,
            searchWord: null,
            selectedImages: null,
        };
        this.chooseRecipe = this.chooseRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.setWord = this.setWord.bind(this);
        this.toCreateForm = this.toCreateForm.bind(this);
        this.updateRecipeInput = this.updateRecipeInput.bind(this);
    }

    componentDidMount() {

        fetch('/api/images')
            .then(res => res.json())
            .then(json => this.setState({images: json}))
            .catch(error => console.error('error', error))

        fetch('/api/recipesIng')
            .then(res => res.json())
            .then(json => this.setState({recipes: json}))
            .catch(error => console.error('error', error))
    }

    chooseRecipe(id) {

        fetch(`/api/recipeIngredients/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({recipeIngredients: json});
            })
            .catch(error => {
                this.setState({recipeIngredients: null});
                console.error('error', error.message)
            })

        fetch(`/api/images/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({selectedImages: json});
            })
            .catch(error => {
                this.setState({selectedImages: null});
                console.error('error', error.message)
            })
            
        fetch(`/api/instructions/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({instructions: json});
            })
            .catch(error => {
                this.setState({instructions: null});
                console.error('error', error.message)
            })

        let currentRecipe = this.state.recipes.filter( recipe => recipe.id === id);
        this.setState({recipe: currentRecipe[0]})
    }

    deleteRecipe(id, index) {
        this.state.recipes.splice(index, 1);
        let url = `/recipes/${id}`;
        if (this.state.recipe) {
            if (id === this.state.recipe.id) {
                this.setState({
                    recipe : null,
                });
            }
        }
        this.setState({ recipes : this.state.recipes });

        fetch(url, { method: 'DELETE' })
            .then(res => console.log('deleted!'))
            .catch(error => console.error('Error: ', error))
    }

    setWord(event) {
        let input = event.target.value.toLowerCase();
        this.setState({
            searchWord : input,
            recipe : null,
        });
    }

    toCreateForm() {
        setTimeout(()=>{
        this.props.history.push('/new');
        }, 100);
    }

    updateRecipeInput(inputValue, id, type) {
        let url = `/recipes/input`;
        this.state.recipe[type] = inputValue
        this.setState({ recipe : this.state.recipe });
        let data = {
            id: id,
            type: type,
            name: inputValue,
        }
        this.runFetch(url, data)
    }

    runFetch(url, data) {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log('updated!')
          })
          .catch(error => console.error('Error: ', error))
    }

    render() {
        return (
            <div>
                <div className={styles.nav}>
                    <input 
                        className={"form-control col-8"}
                        placeholder="Search for a recipe"
                        onChange={this.setWord}>
                    </input>
                    <button 
                        className={"btn btn-warning"}
                        onClick={this.toCreateForm}
                        >Create New Recipe
                    </button>
                </div>
                <div className={styles.recipeContainer}>
                    <Recipes 
                        chooseRecipe={this.chooseRecipe}
                        deleteRecipe={this.deleteRecipe}
                        images={this.state.images}
                        recipes = {this.state.recipes}
                        searchWord = {this.state.searchWord}
                        toCreateForm={this.toCreateForm}
                    />
                    <Recipe 
                        ingredients={this.state.recipeIngredients}
                        instructions={this.state.instructions}
                        recipe={this.state.recipe}
                        selectedImages={this.state.selectedImages}
                        updateRecipeInput={this.updateRecipeInput}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
