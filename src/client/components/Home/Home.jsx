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
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.chooseRecipe = this.chooseRecipe.bind(this);
        this.setWord = this.setWord.bind(this);
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
    }

    // show create new recipe page/route
    clickHandler() {
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

    render() {
        return (
            <div>
                <div className={styles.nav}>
                    <h1>Index Page</h1>
                    <input 
                        placeholder="search recipe"
                        onChange={this.setWord}>
                    </input>
                    <button onClick={this.clickHandler}>Create New Recipe</button>
                </div>
                <div className={styles.recipeContainer}>
                    <Recipes 
                        recipes={this.state.recipes} 
                        chooseRecipe={this.chooseRecipe}
                        searchWord = {this.state.searchWord}
                        images = {this.state.images}
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
