import React from 'react';
import styles from './style.scss';

import Recipes from './Recipes/Recipes';
import { withRouter } from 'react-router-dom';

import Recipe from './Recipe/Recipe';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            monkey: 'wowowowowow',
            data: null,
            recipe: null,
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.chooseRecipe = this.chooseRecipe.bind(this);
    }

    componentDidMount() {
        // console.log('in component')

        // fetch('http://swapi.co/api/people/1')
        fetch('http://localhost:3000/test', {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }})
            .then(res => res.json())
            .then(json => this.setState({data: json}))
            .catch(error => console.log(error))
    }

    clickHandler() {
        setTimeout(()=>{
        this.props.history.push('/new');
        }, 100);
    }

    chooseRecipe(id) {
        console.log('chose me!', id);
        console.log(this.state.data)
        
        let currentRecipe = this.state.data.filter( x => x.id === id);
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
                        data={this.state.data} chooseRecipe={this.chooseRecipe}
                    />
                    <Recipe recipe={this.state.recipe}/>
                </div>
            </div>
        );
    }
}

// export default Index;
export default withRouter(Home);
