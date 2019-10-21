import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './style.scss';

import Recipe from './Recipe/Recipe';
import Recipes from './Recipes/Recipes';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: null,
            recipe: null,
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.chooseRecipe = this.chooseRecipe.bind(this);
    }

    componentDidMount() {
        // get all recipes to display on home page
        fetch('/api/recipes')
            .then(res => res.json())
            .then(json => this.setState({recipes: json}))
    }

    // fetch(`/api/recipeIngredients/${id}`)
    //         .then(res => res.json())
    //         .then(json => 
    //             this.setState({ingredients: json})
    //         );

    // show create new recipe page/route
    clickHandler() {
        setTimeout(()=>{
        this.props.history.push('/new');
        }, 100);
    }

    chooseRecipe(id) {
        console.log('chose me!', id);
        console.log(this.state.recipes)
        // fetch('/test')
            // .then(res => res.json())
            // .then(json => this.setState({data: json}))
        
        let currentRecipe = this.state.recipes.filter( x => x.id === id);
        this.setState({recipe: currentRecipe[0]})
        // console.log(currentRecipe[0]);
    }

    render() {
        // console.log(this.state.data);
        return (
            <div>
                <div className={styles.nav}>
                    <h1>Index Page</h1>
                    <input value="search"></input>
                    <button onClick={this.clickHandler}>Create New Recipe</button>
                </div>
                <div className={styles.recipeContainer}>
                    <Recipes 
                        recipes={this.state.recipes} 
                        chooseRecipe={this.chooseRecipe}
                    />
                    <Recipe recipe={this.state.recipe}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
