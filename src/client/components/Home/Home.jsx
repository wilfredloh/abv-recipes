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
            data2: 'hi',
        };
        this.clickHandler = this.clickHandler.bind(this);
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
                    <Recipes data={this.state.data}/>
                    <Recipe />
                </div>
            </div>
        );
    }
}

// export default Index;
export default withRouter(Home);
