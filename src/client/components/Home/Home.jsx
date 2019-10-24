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
            selectedImages: null,
            instructions: null,
            recipes: null,
            recipe: null,
            recipeIngredients: null,
            searchWord: null,
            recipesIng: null
        };
        this.toCreateForm = this.toCreateForm.bind(this);
        this.chooseRecipe = this.chooseRecipe.bind(this);
        this.setWord = this.setWord.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    componentDidMount() {
        // get all recipes to display on home page
        fetch('/api/recipes')
            .then(res => res.json())
            .then(json => this.setState({recipes: json}))
            .catch(error => console.error('error', error))

        fetch('/api/images')
            .then(res => res.json())
            .then(json => this.setState({images: json}))
            .catch(error => console.error('error', error))

        fetch('/api/recipesIng')
            .then(res => res.json())
            .then(json => this.setState({recipesIng: json}))
            .catch(error => console.error('error', error))
    }

    // show create new recipe page/route
    toCreateForm() {
        setTimeout(()=>{
        this.props.history.push('/new');
        }, 100);
    }

    setWord(event) {
        let input = event.target.value.toLowerCase();
        this.setState({
            searchWord : input,
            recipe : null,
        });
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

        let currentRecipe = this.state.recipes.filter( x => x.id === id);
        this.setState({recipe: currentRecipe[0]})
    }

    deleteRecipe(id, index) {
        this.state.recipesIng.splice(index, 1);
        let url = `/recipes/${id}`;
        this.setState({ recipesIng : this.state.recipesIng });
        fetch(url, { method: 'DELETE' })
            .then(res => console.log('deleted!'))
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
                    <button className={"btn btn-warning"}onClick={this.toCreateForm}>Create New Recipe</button>
                </div>
                <div className={styles.recipeContainer}>
                    <Recipes 
                        // recipes={this.state.recipes} 
                        chooseRecipe={this.chooseRecipe}
                        searchWord = {this.state.searchWord}
                        images={this.state.images}
                        deleteRecipe={this.deleteRecipe}
                        toCreateForm={this.toCreateForm}
                        recipesIng = {this.state.recipesIng}
                    />
                    <Recipe 
                        recipe={this.state.recipe}
                        ingredients={this.state.recipeIngredients}
                        instructions={this.state.instructions}
                        selectedImages={this.state.selectedImages}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
